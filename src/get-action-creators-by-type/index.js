import { ACTIONS } from '../constants/action-types';
import { getActionCreator } from '../get-action-creator';

export const getActionCreatorsByType = moduleName => ACTIONS.reduce((acc, actionType) => {
    acc[actionType] = getActionCreator(moduleName, actionType);

    return acc;
}, {});

const showDeprecationMessage = fn => {
    return (...args) => {
        console.error('[getProcedure]: `actionCreatorsByType` are deprecated; instead use `actions`');
        return fn(...args);
    };
};

export const getDeprecatedActionCreatorsByType = moduleName => ACTIONS.reduce((acc, actionType) => {
    acc[actionType] = showDeprecationMessage(getActionCreator(moduleName, actionType));

    return acc;
}, {});