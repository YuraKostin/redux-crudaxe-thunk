export const throwError = fnName => message => {
    throw new Error(`[${fnName}]: ${message}`);
};