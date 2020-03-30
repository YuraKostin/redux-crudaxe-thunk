import { ACTIONS } from '../constants/action-types';
import { getActionCreator } from '../get-action-creator';

export const getActionCreatorsByType = moduleName => ACTIONS.reduce((acc, actionType) => {
    acc[actionType] = getActionCreator(moduleName, actionType);

    return acc;
}, {});