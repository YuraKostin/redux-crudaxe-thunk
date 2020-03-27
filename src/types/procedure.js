/**
 * @typedef {Object} Selector
 * @property {function} data
 * @property {function} error
 * @property {function} isInProcess
 *
 */

/**
 * @typedef {Object} Selectors
 * @property {Selector} [create]
 * @property {Selector} [delete]
 * @property {Selector} [read]
 * @property {Selector} [update]
 */

/**
 * @typedef {Object} Procedure
 * @property {Object} actionCreatorsByType
 * @property {function} reducer
 * @property {Selectors} selectors
 */