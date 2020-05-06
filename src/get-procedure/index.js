import {isEmpty, path} from 'ramda';

import {getActionCreatorsByType, getDeprecatedActionCreatorsByType} from '../get-action-creators-by-type';
import {getActionHandlers} from '../get-action-handlers';
import {getAsyncAction} from '../get-async-action';
import {getInitialState} from '../get-initial-state';
import {getPureSelectorsForModuleState} from '../get-pure-selectors-for-module-state';
import {getReducer} from '../get-reducer';
import {throwError} from '../throw-error';
import {getAsyncMockAction} from '../get-async-mock-action';

/**
 * @param {string|Array<string>} moduleName
 * @param {function} request
 * @param {Object} options
 * @param {StateDefaults} [options.stateDefaults]
 * @returns {Procedure}
 */
export const getProcedure = (moduleName, request, options = {}) => {
    const {
        mock,
        sideEffects,
        stateDefaults = {},
    } = options;
    const throwProcedureError = throwError('getProcedure');
    const moduleNameArray = Array.isArray(moduleName) ? moduleName : [moduleName];
    const moduleNameString = moduleNameArray.join('/');

    if (isEmpty(moduleNameString)) {
        throwProcedureError('moduleName cannot be an empty');
    }

    if (typeof request !== 'function') {
        throwProcedureError(`request should be a function`);
    }

    if (Object.prototype.toString.call(stateDefaults) !== '[object Object]') {
        throwProcedureError(`stateDefaults should be an object`);
    }

    const actionHandlers = getActionHandlers(moduleNameString, stateDefaults);
    const initialState = getInitialState(stateDefaults);
    const reducer = getReducer({
        actionHandlersByActionType: actionHandlers,
        initialState,
    });
    const selectors = getPureSelectorsForModuleState(moduleNameArray, initialState);
    const selectAll = path(moduleNameArray);
    const actions = getActionCreatorsByType(moduleNameString);
    const deprecatedActionCreatorsByType = getDeprecatedActionCreatorsByType(moduleNameString);

    const asyncAction = mock ?
        getAsyncMockAction(moduleNameString, request, mock, {
            sideEffects,
        }) :
        getAsyncAction(moduleNameString, request, {
            sideEffects,
        });

    return {
        actionCreatorsByType: deprecatedActionCreatorsByType, // TODO: Remove in future versions
        actions,
        reducer,
        request: asyncAction,
        selectAll,
        selectors,
        init: () => ({
            [moduleName]: reducer,
        }),
    };
};
