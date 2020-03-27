import { getAction } from '../get-action';
import { getInitialState } from '../get-initial-state';
import { getValueByKeyOrDefault } from '../get-value-by-key-or-default';
import { ERROR, RECEIVE, REQUEST, RESET } from '../constants/action-types';

export const getActionHandlers = (moduleName, stateDefaults) => {
    const createActionForActionType = getAction(moduleName);
    const getValueFor = getValueByKeyOrDefault(stateDefaults);
    const getValueForData = getValueFor('data');
    const getValueForError = getValueFor('error');
    const getValueForIsInProcess = getValueFor('isInProcess');

    return {
        [createActionForActionType(ERROR)]: (_, payload) => ({
            data: getValueForData(null),
            error: payload,
            isInProcess: getValueForIsInProcess(false),
        }),

        [createActionForActionType(RECEIVE)]: (_, payload) => ({
            data: payload,
            error: getValueForError(false),
            isInProcess: getValueForIsInProcess(false),
        }),

        [createActionForActionType(REQUEST)]: () => ({
            data: getValueForData(null),
            error: getValueForError(null),
            isInProcess: true,
        }),

        [createActionForActionType(RESET)]: () => getInitialState(stateDefaults),
    };
};