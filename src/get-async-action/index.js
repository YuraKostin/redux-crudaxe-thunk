import { to } from 'await-to-js';

import { getActionCreator } from '../get-action-creator';
import { ERROR, RECEIVE, REQUEST } from '../constants/action-types';

/**
 * @param {string} moduleName
 * @param {function} request
 * @param {Object} sideEffects
 * @param {function} sideEffects.data
 * @param {function} sideEffects.error
 * @return {function(*=): function(...[*]=)}
 */
export const getAsyncAction = (moduleName, request, sideEffects = {}) => data => async dispatch => {
    const createActionCreatorForType = getActionCreator(moduleName);
    dispatch(createActionCreatorForType(REQUEST)());

    const [error, response] = await to(request(data));

    if (error) {
        dispatch(createActionCreatorForType(ERROR)(error));

        if (typeof sideEffects.error === 'function') {
            sideEffects.error(error, dispatch);
        }

        return Promise.reject(error);
    }

    dispatch(createActionCreatorForType(RECEIVE)(response));

    if (typeof sideEffects.data === 'function') {
        sideEffects.data(response, dispatch);
    }

    return Promise.resolve(response);
};