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

/**
 * @param {string} type
 * @return {string}
 */
const mapMockTypeToAction = (moduleName, type, value) => {
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
        } = mock;

        const isNotError = ['data', 'isInProcess'].includes(type);
        const mockState = mapMockTypeToState(type, value);
        const mockAction = mapMockTypeToAction(moduleName, type, value);

        dispatch(mockAction);

        if (isNotError) {
            return Promise.resolve(mockState);
        }

        return Promise.reject(mockState);
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