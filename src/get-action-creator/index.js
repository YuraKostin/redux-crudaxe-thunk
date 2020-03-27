import { curryN } from 'ramda';

import { ERROR, RECEIVE, REQUEST, RESET } from '../constants/action-types';
import { getAction } from '../get-action';


// Action creators
export const getActionCreator = curryN(2, (moduleName, type) => {
    const upperCaseType = type.toUpperCase();
    const createActionForActionType = getAction(moduleName);

    const actionCreatorsByActionType = {
        [ERROR]: payload => ({
            payload,
            type: createActionForActionType(ERROR),
        }),

        [RECEIVE]: payload => ({
            payload,
            type: createActionForActionType(RECEIVE),
        }),

        [REQUEST]: () => ({
            type: createActionForActionType(REQUEST),
        }),

        [RESET]: () => ({
            type: createActionForActionType(RESET),
        }),
    };

    return actionCreatorsByActionType[upperCaseType];
});