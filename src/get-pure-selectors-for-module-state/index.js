import {
    __,
    append,
    compose,
    converge,
    identity,
    keys,
    map,
    mergeAll,
    objOf,
    path,
} from 'ramda';

/**
 * Get carried function for getting part of store
 * @param {Array} moduleName
 * @param {Object} stateObject
 * @return {Array<function>}
 */
export const getPureSelectorsForModuleState = (moduleName, stateObject) => compose(
    mergeAll,
    map(converge(
        objOf,
        [
            identity,
            compose(
                path,
                append(__, moduleName),
            ),
        ],
    )),
    keys,
)(stateObject);