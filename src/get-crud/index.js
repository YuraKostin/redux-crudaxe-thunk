import { combineReducers } from 'redux';
import { isEmpty } from 'ramda';

import { getProcedure } from '../get-procedure';
import { throwError } from '../throw-error';
import { isValidCrudConfigKey } from '../is-valid-crud-config-key';

/**
 * @param {string} moduleName
 * @param {Object} config
 * @param {ConfigItem} [config.create]
 * @param {ConfigItem} [config.delete]
 * @param {ConfigItem} [config.read]
 * @param {ConfigItem} [config.update]
 * @returns {CRUD}
 */
export const getCRUD = (moduleName, config) => {
    const throwCrudError = throwError('getCRUD');
    if (isEmpty(moduleName)) {
        throwCrudError('moduleName cannot be an empty string');
    }

    if (Object.prototype.toString.call(config) !== '[object Object]') {
        throwCrudError('config should be an object');
    }

    if (isEmpty(config)) {
        throwCrudError('config cannot be an empty object');
    }

    const { crud, reducersByOperation } = Object.entries(config)
        .reduce((accumulator, [key, configuration]) => {
            if (!isValidCrudConfigKey(key)) {
                throwCrudError(`Invalid config key: ${key}`);
            }

            const {
                stateDefaults = {},
                requestFn,
            } = configuration;

            if (typeof request !== 'function') {
                throwCrudError(`request for ${key} operation should be a function`);
            }

            if (Object.prototype.toString.call(stateDefaults) !== '[object Object]') {
                throwCrudError(`stateDefaults for ${key} should be an object`);
            }

            const {
                actionCreatorsByType,
                reducer,
                request,
                selectors,
            } = getProcedure([moduleName, key], requestFn, {
                stateDefaults
            });

            accumulator.crud[key] = {
                actionCreatorsByType,
                request,
                selectors,
            };
            accumulator.reducersByOperation[key] = reducer;

            return accumulator;
        }, {
            crud: {},
            reducersByOperation: {},
        });

    return {
        ...crud,
        reducer: combineReducers(reducersByOperation),
    };
};
