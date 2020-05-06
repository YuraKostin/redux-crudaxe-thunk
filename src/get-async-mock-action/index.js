import {ERROR, RECEIVE, REQUEST} from '../constants/action-types';
import {getActionCreator} from '../get-action-creator';

// mapMockTypeToAction :: string -> (string -> any) -> function
const mapMockTypeToAction = moduleName => (type, value) => {
    const actionTypesByMockType = {
        data: RECEIVE,
        error: ERROR,
        isInProcess: REQUEST,
    };

    const actionName = actionTypesByMockType[type];

    if (!actionName) {
        throw new Error(`[mapMockTypeToAction]: mock.type should be one of values: 'data' | 'error' | 'isInProcess'`)
    }

    return getActionCreator(moduleName, actionName)(value);
};

const DATA_ACTION = 'data';
const ERROR_ACTION = 'error';
const IS_IN_PROCESS_ACTION = 'isInProcess';

const getFakeResponse = (data = {}, error = {}) => ({data, error});

/**
 * @param {string} moduleName
 * @param {function} request
 * @param {Object} [options]
 * @param {Object} [options.sideEffects]
 * @param {function} options.sideEffects.data
 * @param {function} options.sideEffects.error
 * @param {Object} options.mock
 * @param {string} options.mock.type
 * @param {any} options.mock.value
 * @param {Object} [options.mock.emulateLoading]
 * @param {number} options.mock.emulateLoading.delay
 * @return {function(*=): function(...[*]=)}
 */
export const getAsyncMockAction = (moduleName, request, mock, options = {}) => data => async dispatch => {
    const {
        sideEffects = {},
    } = options;

    const {
        type,
        value,
        emulateLoading = null,
    } = mock;

    const mockAction = mapMockTypeToAction(moduleName);

    if (type === IS_IN_PROCESS_ACTION) {
        dispatch(mockAction(IS_IN_PROCESS_ACTION));
    } else {
        if (type === DATA_ACTION) {
            if (emulateLoading) {
                dispatch(mockAction(IS_IN_PROCESS_ACTION));

                return new Promise(resolve => {
                    setTimeout(() => {
                        dispatch(mockAction(DATA_ACTION, value));

                        if (typeof sideEffects.data === 'function') {
                            sideEffects.data(value, dispatch);
                        }

                        resolve(getFakeResponse(value));
                    }, emulateLoading.delay);
                });
            }

            dispatch(mockAction(DATA_ACTION, value));

            if (typeof sideEffects.data === 'function') {
                sideEffects.data(value, dispatch);
            }

            return Promise.resolve(getFakeResponse(value));
        }

        if (type === ERROR_ACTION) {
            if (emulateLoading) {
                dispatch(mockAction(IS_IN_PROCESS_ACTION));

                return new Promise((_, reject) => {
                    setTimeout(() => {
                        dispatch(mockAction(ERROR_ACTION, value));

                        if (typeof sideEffects.error === 'function') {
                            sideEffects.error(value, dispatch);
                        }

                        resolve(getFakeResponse({}, mockState));
                    }, emulateLoading.delay);
                });
            }

            dispatch(mockAction(ERROR_ACTION, value));

            if (typeof sideEffects.error === 'function') {
                sideEffects.error(value, dispatch);
            }

            return Promise.resolve(getFakeResponse({}, value));
        }
    }
};