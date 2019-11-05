export const GETALLRISKS = 'ALL'
export const ADDNEWRISK = 'ADD'
export const ASYNCCALL = 'ASYNCCALL'

export const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            //after some backend API call response, dispatch action
            //middleware before dispatching action
            dispatch(saveResult(res));
        }, 2000);
    }
};

export const saveResult = (res) => {
    return {
        type: 'ASYNCCALL',
        result: res
    };
}