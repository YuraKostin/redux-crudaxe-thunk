import {
    T,
    cond,
    complement,
    compose,
    curryN,
    identity,
    isEmpty,
    prop,
} from 'ramda';

// isFullfiledObjectByProp :: string -> Object(Response) -> boolean
const isFullfiledObjectByProp = curryN(2, compose(
    complement(isEmpty),
    prop,
));

const getValueByHandler = curryN(2, (fn, dataProp) => fn === identity ?
    identity :
    compose(
        fn,
        prop(dataProp),
    ),
);

/**
 * @param {function} [handleSuccess]
 * @param {function} [handleError]
 * @param {function} [handleDefault]
 * @return {any}
 */
export const handleResponse = (
    handleSuccess = identity,
    handleError = identity,
    handleDefault = identity,
) => cond([
    [isFullfiledObjectByProp('data'), getValueByHandler(handleSuccess, 'data')],
    [isFullfiledObjectByProp('error'), getValueByHandler(handleError, 'error')],
    [T, handleDefault],
]);