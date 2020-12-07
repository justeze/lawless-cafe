import * as actions from "../actions/actionTypes";

const initialState = {
    transactions: [],
    // invoice: new Date().getTime(),
    isPending: false,
    isRejected: false,
    isFulfilled: false
}

const transactionReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.ADD_TRANSACTION + actions.PENDING:
            return {
                ...state,
                isPending: true
            }
        case actions.ADD_TRANSACTION + actions.REJECTED:
            return {
                ...state,
                isRejected: true,
                isPending: false,
                isFulfilled: false,
                error: payload,
            }
        case actions.ADD_TRANSACTION + actions.FULFILLED:
            return {
                ...state,
                isRejected: false,
                isPending: false,
                isFulfilled: true,
                transactions: payload.data.data,
            }
        case actions.TRANSACTION_CLEAR_STATE:
            return {
                transactions: [],
                // invoice: '',
                isPending: false,
                isRejected: false,
                isFulfilled: false
            }
        default:
            return state
    }
}

export default transactionReducer;
