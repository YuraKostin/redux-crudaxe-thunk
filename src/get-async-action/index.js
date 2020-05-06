import {getActionCreator} from '../get-action-creator';
import {ERROR, RECEIVE, REQUEST} from '../constants/action-types';

/**
 * @param {string} moduleName
 * @param {function} request
 * @param {Object} [options]
 * @param {Object} [options.sideEffects]
 * @param {function} options.sideEffects.data
 * @param {function} options.sideEffects.error
 * @return {function(*=): function(...[*]=)}
 */
export const getAsyncAction = (moduleName, request, options = {}) => data => async dispatch => {
    const {
        sideEffects = {},
    } = options;

    const createActionCreatorForType = getActionCreator(moduleName);

    dispatch(createActionCreatorForType(REQUEST)());


    let response = {};
    let responseError = {};

    try {
        response = await request(data);

        dispatch(createActionCreatorForType(RECEIVE)(response));

        if (typeof sideEffects.data === 'function') {
            sideEffects.data(response, dispatch);
        }
    } catch (error) {
        responseError = error;
        dispatch(createActionCreatorForType(ERROR)(error));

        if (typeof sideEffects.error === 'function') {
            sideEffects.error(error, dispatch);
        }
    }

    return Promise.resolve({
        data: response,
        error: responseError,
    });
};