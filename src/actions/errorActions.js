import * as types from './types'

// RETURN ERRORS
export const returnErrors = (msg, status, id = null) => {
    return {
        type: types.GET_ERRORS,
        payload: { msg, status, id }
    };
};

// CLEAR ERRORS
export const clearErrors = () => {
    return {
        type: types.CLEAR_ERRORS
    };
};