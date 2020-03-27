/**
 * @param {Object} options
 * @param {Object} options.actionHandlersByActionType
 * @param {Object|Array} options.initialState
 * @returns {Function}
 */
export const getReducer = options => {
    const {
        actionHandlersByActionType,
        initialState,
    } = options;

    return (state = initialState, { payload, type }) => {
        const actionHandler = actionHandlersByActionType[type];

        if (actionHandler) {
            return actionHandler(state, payload);
        }

        return state;
    };
};