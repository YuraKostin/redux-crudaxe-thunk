/**
 * @param {string} configKey
 * @return {boolean}
 */
export const isValidCrudConfigKey = configKey => {
    const standardKeys = ['create', 'delete', 'read', 'update'];

    return standardKeys.includes(configKey);
};