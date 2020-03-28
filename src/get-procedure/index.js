import { isEmpty, join } from 'ramda';

import { ACTIONS } from '../constants/action-types';
import { getActionCreator } from '../get-action-creator';
import { getActionHandlers } from '../get-action-handlers';
import { getInitialState } from '../get-initial-state';
import { getPureSelectorsForModuleState } from '../get-pure-selectors-for-module-state';
import { getReducer } from '../get-reducer';
import { throwError } from '../throw-error';

/**
 *
 * @param {Array} moduleNameParts
 * @param {function} request
 * @param {StateDefaults} stateDefaults
 * @returns {Procedure}
 */
export const getProcedure = (moduleNameParts, request, stateDefaults = {}) => {
    const throwProcedureError = throwError('getProcedure');

    if (isEmpty(moduleNameParts)) {
        throwProcedureError('moduleNameParts cannot be an empty array');
    }

    if (typeof request !== 'function') {
        throwProcedureError(`request should be a function`);
    }

    if (Object.prototype.toString.call(stateDefaults) !== '[object Object]') {
        throwProcedureError(`stateDefaults should be an object`);
    }

    const actionHandlers = getActionHandlers(join('/', moduleNameParts), stateDefaults);
    const initialState = getInitialState(stateDefaults);
    const reducer = getReducer({
        actionHandlersByActionType: actionHandlers,
        initialState,
    });
    const selectors = getPureSelectorsForModuleState(moduleNameParts, initialState);
    const actionCreatorsByType = ACTIONS.reduce((acc, actionType) => {
        acc[actionType] = getActionCreator(join('/', moduleNameParts), actionType);

        return acc;
    }, {});

    return {
        actionCreatorsByType,
        reducer,
        selectors,
    };
};
