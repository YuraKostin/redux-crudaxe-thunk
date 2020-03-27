/**
 * @param {string} configKey
 * @return {boolean}
 */
const isValidCrudConfigKey = configKey => {
    const standardKeys = ['create', 'delete', 'read', 'update'];

    return standardKeys.includes(configKey);
};