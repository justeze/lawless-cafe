import * as actions from "../actions/actionTypes";

const initialState = {
    user: {},
    errMsg: "",
    status: {},
    isLogin: false,
    isPending: false,
    isFulfilled: false,
    isRejected: false,
};

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.AUTH_RESET_PASSWORD + actions.PENDING:
            return {
                ...state,
                isPending: true,
            };
        case actions.AUTH_RESET_PASSWORD + actions.REJECTED:
            return {
                ...state,
                isRejected: true,
                user: payload,
                isPending: false,
            };
        case actions.AUTH_RESET_PASSWORD + actions.FULFILLED:
            if (payload.data.isSuccess === false) {
                // console.log('kambing', payload.data.data)
                return {
                    ...state,
                    status: payload.data.status,
                    errMsg: payload.data.error.msg,
                };
            } else {
                return {
                    ...state,
                    isFulfilled: true,
                    isPending: false,
                    user: payload.data.data,
                    errMsg: "",
                    status: payload.data.status,
                    isRejected: false,
                    isLogin: true,
                };
            }
        case actions.AUTH_RESET_FULLFILED + actions.PENDING:
            return {
                ...state,
                isPending: true,
            };
        case actions.AUTH_RESET_FULLFILED + actions.REJECTED:
            return {
                ...state,
                isRejected: true,
                user: payload,
                isPending: false,
            };
        case actions.AUTH_RESET_FULLFILED + actions.FULFILLED:
            if (payload.data.isSuccess === false) {
                // console.log('kambing', payload.data.data)
                return {
                    ...state,
                    status: payload.data.status,
                    errMsg: payload.data.error.msg,
                };
            } else {
                return {
                    ...state,
                    isFulfilled: true,
                    isPending: false,
                    user: payload.data.data,
                    errMsg: "",
                    status: payload.data.status,
                    isRejected: false,
                    isLogin: true,
                };
            }

        case actions.AUTH_LOGIN_USER + actions.PENDING:
            return {
                ...state,
                isPending: true,
            };
        case actions.AUTH_LOGIN_USER + actions.REJECTED:
            return {
                ...state,
                isRejected: true,
                user: payload,
                isPending: false,
            };
        case actions.AUTH_LOGIN_USER + actions.FULFILLED:
            // console.log('kambing')
            if (payload.data.isSuccess === false) {
                return {
                    ...state,
                    status: payload.data.status,
                    errMsg: payload.data.data.msg,
                };
            }
            return {
                ...state,
                isFulfilled: true,
                isPending: false,
                user: payload.data.data,
                errMsg: "",
                status: payload.data.status,
                isRejected: false,
                isLogin: true,
            };
        case actions.AUTH_REGISTER_USER + actions.PENDING:
            return {
                ...state,
                isPending: true,
            };
        case actions.AUTH_REGISTER_USER + actions.REJECTED:
            return {
                ...state,
                isRejected: true,
                user: payload,
                isPending: false,
            };
        case actions.AUTH_REGISTER_USER + actions.FULFILLED:
            if (payload.data.isSuccess === false) {
                return {
                    ...state,
                    status: payload.data.status,
                    errMsg: payload.data.data.msg,
                };
            }
            return {
                ...state,
                isFulfilled: true,
                isPending: false,
                user: payload.data.data,
                errMsg: "",
                status: payload.data.status,
                isRejected: false,
                isLogin: true,
            };
        case actions.AUTH_CLEAR_STATE:
            return {
                user: {},
                errMsg: "",
                status: {},
                isLogin: false,
                isPending: false,
                isFulfilled: false,
                isRejected: false,
            };
        case actions.AUTH_LOGOUT_USER:
            return {
                user: {},
                isLogin: false,
                isPending: false,
                isFulfilled: false,
                isRejected: false,
            };
        default:
            return state;
    }
};

export default authReducer;