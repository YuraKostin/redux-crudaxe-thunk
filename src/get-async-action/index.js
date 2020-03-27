import { to } from 'await-to-js';

import { getActionCreator } from '../get-action-creator';
import { ERROR, RECEIVE, REQUEST } from '../constants/action-types';

// Async action
export const getAsyncAction = (moduleName, request) => data => async dispatch => {
    const createActionCreatorForType = getActionCreator(moduleName);
    dispatch(createActionCreatorForType(REQUEST)());

    const [error, response] = await to(request(data));

    if (error) {
        dispatch(createActionCreatorForType(ERROR)(error));
        return Promise.reject(error);
    }

    dispatch(createActionCreatorForType(RECEIVE)(response));
    return Promise.resolve(response);
};