/**
 * @typedef {Object} ProcedureSelectors
 * @property {function} data
 * @property {function} error
 * @property {function} isInProcess
 */

/**
 * @typedef {Object} Procedure
 * @property {Object} actionCreatorsByType
 * @property {function} reducer
 * @property {function} request
 * @property {function} selectAll
 * @property {ProcedureSelectors} selectors
 */

/**
 * @typedef {Object} CRUD
 * @property {function} reducer
 * @property {ProcedureSelectors} [create]
 * @property {ProcedureSelectors} [delete]
 * @property {ProcedureSelectors} [read]
 * @property {ProcedureSelectors} [update]
 */