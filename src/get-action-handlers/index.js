import { and, compose, ifElse, or, useWith, __ } from 'ramda';
import { getAction } from '../get-action';
import { getInitialState } from '../get-initial-state';
import { getValueByKeyOrDefault } from '../get-value-by-key-or-default';
import { ERROR, RECEIVE, REQUEST, RESET } from '../constants/action-types';

export const getActionHandlers = (moduleName, stateDefaults, options = {}) => {
    const getValueFor = getValueByKeyOrDefault(stateDefaults);
    const getValueForData = getValueFor('data');
    const getValueForError = getValueFor('error');
    const getValueForIsInProcess = getValueFor('isInProcess');

    const createActionForActionType = getAction(moduleName);

    return {
        [createActionForActionType(ERROR)]: (_, payload) => ({
            data: getValueForData(),
            error: payload,
            isInProcess: getValueForIsInProcess(false),
        }),

        [createActionForActionType(RECEIVE)]: (_, payload) => ({
            data: payload,
            error: getValueForError(),
            isInProcess: getValueForIsInProcess(false),
        }),

        [createActionForActionType(REQUEST)]: _state => {
            const {isPersistState} = options;
            const state = isPersistState ? _state : null;

            return ({
                data: getValueForData(state),
                error: getValueForError(state),
                isInProcess: true,
            });
        },

        [createActionForActionType(RESET)]: () => getInitialState(stateDefaults),
    };
};