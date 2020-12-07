import * as actions from "../actions/actionTypes";

const initialState = {
    history: [],
    isPending: false,
    isRejected: false,
    isFulfilled: false
}

const historyReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.HISTORY_FETCH + actions.PENDING:
            return {
                ...state,
                isPending: true
            }
        case actions.HISTORY_FETCH + actions.REJECTED:
            return {
                ...state,
                isRejected: true,
                isPending: false,
                isFulfilled: false,
                error: payload,
            }
        case actions.HISTORY_FETCH + actions.FULFILLED:
            return {
                ...state,
                isRejected: false,
                isPending: false,
                isFulfilled: true,
                history: payload.data.data,
            }
        default:
            return state
    }
}

export default historyReducer;
