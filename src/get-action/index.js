import { ERROR, RECEIVE, REQUEST, RESET } from '../constants/action-types';

export const getAction = moduleName => type => {
    const actionTypesByType = {
        ERROR,
        RECEIVE,
        REQUEST,
        RESET,
    };

    return `${moduleName}/${actionTypesByType[type]}`;
};