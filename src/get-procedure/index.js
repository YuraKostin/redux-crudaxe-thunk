import { isEmpty } from 'ramda';

import { ACTIONS } from '../constants/action-types';
import { getActionCreator } from '../get-action-creator';
import { getActionHandlers } from '../get-action-handlers';
import { getInitialState } from '../get-initial-state';
import { getPureSelectorsForModuleState } from '../get-pure-selectors-for-module-state';
import { getReducer } from '../get-reducer';
import { throwError } from '../throw-error';

/**
 *
 * @param {string} moduleName
 * @param {function} request
 * @param {StateDefaults} stateDefaults
 * @returns {Procedure}
 */
export const getProcedure = (moduleName, request, stateDefaults = {}) => {
    const throwProcedureError = throwError('getProcedure');

    if (isEmpty(moduleName)) {
        throwProcedureError('moduleName cannot be an empty string');
    }

    if (typeof request !== 'function') {
        throwProcedureError(`request should be a function`);
    }

    if (Object.prototype.toString.call(stateDefaults) !== '[object Object]') {
        throwProcedureError(`stateDefaults should be an object`);
    }

    const actionHandlers = getActionHandlers(moduleName, stateDefaults);
    const initialState = getInitialState(stateDefaults);
    const reducer = getReducer({
        actionHandlersByActionType: actionHandlers,
        initialState,
    });
    const selectors = getPureSelectorsForModuleState([moduleName], initialState);
    const actionCreatorsByType = ACTIONS.reduce((acc, actionType) => {
        acc[actionType] = getActionCreator(moduleName, actionType);

        return acc;
    }, {});

    return {
        actionCreatorsByType,
        reducer,
        selectors,
    };
};