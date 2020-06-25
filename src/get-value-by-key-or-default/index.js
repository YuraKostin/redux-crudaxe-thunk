// Action handlers
export const getValueByKeyOrDefault = stateDefaults => valueKey => object => {
    const safeObject = object || stateDefaults || {};

    return safeObject[valueKey];
};