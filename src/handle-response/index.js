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

/**
 * @param {function} [onResult]
 * @param {function} [onError]
 * @param {function} [handleDefault]
 * @return {any}
 */
export const handleResponse = (
    onResult = identity,
    onError = identity,
    handleDefault = identity
) => cond([
    [isFullfiledObjectByProp('data'), onResult],
    [isFullfiledObjectByProp('error'), onError],
    [T, handleDefault],
]);