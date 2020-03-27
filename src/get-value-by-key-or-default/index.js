// Action handlers
export const getValueByKeyOrDefault = object => valueKey => defaultValue => {
    if (Object.prototype.hasOwnProperty.call(object, valueKey)) {
        return object[valueKey];
    }

    return defaultValue;
};