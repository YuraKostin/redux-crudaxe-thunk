import {getActionCreator} from '../get-action-creator';
import {ERROR, RECEIVE, REQUEST} from '../constants/action-types';
import {getEmptyState} from '../get-empty-state';

/**
 * @param {string} type
 * @param {any} value
 * @return {any}
 */
const mapMockTypeToState = (type, value) => {
    const emptyState = getEmptyState();
    const map = {
        data: {
            date: value,
        },
        error: {
            error: value,
        },
        isInProcess: {
            isInProcess: Boolean(value),
        },
    };

    return Object.assign(emptyState, map[type]);
};

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

/**
 * @param {string} moduleName
 * @param {function} request
 * @param {Object} [options]
 * @param {Object} [options.sideEffects]
 * @param {function} options.sideEffects.data
 * @param {function} options.sideEffects.error
 * @param {Object} [options.mock]
 * @param {string} options.mock.type
 * @param {any} options.mock.value
 * @param {Object} [options.mock.emulateLoading]
 * @param {number} options.mock.emulateLoading.delay
 * @return {function(*=): function(...[*]=)}
 */
export const getAsyncAction = (moduleName, request, options = {}) => data => async dispatch => {
    const {
        mock = null,
        sideEffects = {},
    } = options;

    // Handle mock

    if (mock) {
        const {
            type,
            value,
            emulateLoading = null,
        } = mock;

        const mockState = mapMockTypeToState(type, value);
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

                            resolve(mockState);
                        }, emulateLoading.delay);
                    });
                }

                dispatch(mockAction(DATA_ACTION, value));

                if (typeof sideEffects.data === 'function') {
                    sideEffects.data(value, dispatch);
                }

                return Promise.resolve(mockState);
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

                            reject(mockState);
                        }, emulateLoading.delay);
                    });
                }

                dispatch(mockAction(ERROR_ACTION, value));

                if (typeof sideEffects.error === 'function') {
                    sideEffects.error(value, dispatch);
                }

                return Promise.reject(mockState);
            }
        }

        return;
    }

    // Handle actual request

    const createActionCreatorForType = getActionCreator(moduleName);

    dispatch(createActionCreatorForType(REQUEST)());

    try {
        const response = await request(data);

        dispatch(createActionCreatorForType(RECEIVE)(response));

        if (typeof sideEffects.data === 'function') {
            sideEffects.data(response, dispatch);
        }

        return Promise.resolve(response);
    } catch (error) {
        dispatch(createActionCreatorForType(ERROR)(error));

        if (typeof sideEffects.error === 'function') {
            sideEffects.error(error, dispatch);
        }

        return Promise.reject(error);
    }
};