import {
    compose,
    mergeAll,
    pair,
    pick,
} from 'ramda';

import { getEmptyState } from '../get-empty-state';

/**
 * @param {Object} stateDefaults
 * @return {Object} result
 * @return {Object|null|*} result.data
 * @return {Object|null} result.error
 * @return {boolean} result.isInProcess
 */
export const getInitialState = compose(
    mergeAll,
    pair(getEmptyState()),
    pick(['data', 'error', 'isInProcess']),
);