import * as actions from "../actions/actionTypes";
import { editItemsCreator } from "../actions/menu";

const initialState = {
    menu: [],
    carts: [],
    addItems: {},
    editItemState: {},
    editItems: {},
    ctgr: [],
    isPending: false,
    isRejected: false,
    isFulfilled: false
}

const menuReducer = (state = initialState, { type, payload }) => {
    let newCart = [...state.carts]
    switch (type) {
        case actions.MENU_FETCH + actions.PENDING:
            return {
                ...state,
                isPending: true
            }
        case actions.MENU_FETCH + actions.REJECTED:
            return {
                ...state,
                isRejected: true,
                isPending: false,
                isFulfilled: false,
                error: payload,
            }
        case actions.MENU_FETCH + actions.FULFILLED:
            return {
                ...state,
                isRejected: false,
                isPending: false,
                isFulfilled: true,
                menu: payload.data.data,
            }
        case actions.MENU_FETCH_SEARCH + actions.PENDING:
            return {
                ...state,
                isPending: true
            }
        case actions.MENU_FETCH_SEARCH + actions.REJECTED:
            return {
                ...state,
                isRejected: true,
                isPending: false,
                isFulfilled: false,
                error: payload,
            }
        case actions.MENU_FETCH_SEARCH + actions.FULFILLED:
            return {
                ...state,
                isRejected: false,
                isPending: false,
                isFulfilled: true,
                menu: payload.data.data,
            }
        case actions.ADD_TO_CART:
            const index = state.carts.findIndex((item) => {
                return payload.id === item.id
            });
            // console.log(state.carts)
            if (index >= 0) {
                state.carts.splice(index, 1);
                return {
                    ...state,
                    carts: state.carts
                }
            } else {
                return {
                    ...state,
                    carts: state.carts.concat(payload)
                }
            }
        case actions.INCREASE_QUANTITY:
            const indexIncQty = state.carts.findIndex((item) => {
                return item.id === payload.id;
            })

            // let newCart = [...state.carts];
            newCart[indexIncQty] = {
                ...newCart[indexIncQty],
                qty: state.carts[indexIncQty].qty + 1,
            }

            return {
                ...state,
                carts: newCart
            }
        case actions.DECREASE_QUANTITY:
            const indexDecQty = state.carts.findIndex((item) => {
                // console.log(state.carts)
                return payload.id === item.id
            })
            if (state.carts[indexDecQty].qty > 1) {
                // let arrData = [...state.carts];
                newCart[indexDecQty] = {
                    ...newCart[indexDecQty],
                    qty: state.carts[indexDecQty].qty - 1,
                };
                return {
                    ...state,
                    carts: newCart,
                };
            } else {
                return {
                    ...state,
                }
            }
        case actions.CLEAR_CART:
            return {
                ...state,
                carts: []
            }
        case actions.CTGR_FETCH + actions.PENDING:
            return {
                ...state,
                isPending: true
            }
        case actions.CTGR_FETCH + actions.REJECTED:
            return {
                ...state,
                isRejected: true,
                isPending: false,
                isFulfilled: false,
            }
        case actions.CTGR_FETCH + actions.FULFILLED:
            return {
                ...state,
                isRejected: false,
                isPending: false,
                isFulfilled: true,
                ctgr: payload.data.data,
            }
        case actions.ADD_ITEMS + actions.PENDING:
            return {
                ...state,
                isPending: true
            }
        case actions.ADD_ITEMS + actions.REJECTED:
            return {
                ...state,
                isRejected: true,
                isPending: false,
                isFulfilled: false,
                error: payload,
            }
        case actions.ADD_ITEMS + actions.FULFILLED:
            return {
                ...state,
                isRejected: false,
                isPending: false,
                isFulfilled: true,
                addItems: payload.data.data,
            }
        case actions.EDIT_ITEM_STATE:
            return {
                ...state,
                editItemState: {
                    ...payload
                }
            }
        case String(editItemsCreator.PENDING):
            return {
                ...state,
                isPending: true
            }
        case String(editItemsCreator.REJECTED):
            return {
                ...state,
                isRejected: true,
                isPending: false,
                isFulfilled: false,
                error: payload,
            }
        case String(editItemsCreator.FULFILLED):
            return {
                ...state,
                isRejected: false,
                isPending: false,
                isFulfilled: true,
                editItems: payload.data,
            }
        case actions.MENU_CLEAR_STATE:
            return {
                menu: [],
                carts: [],
                addItems: {},
                editItemsState: {},
                ctgr: [],
                isPending: false,
                isRejected: false,
                isFulfilled: false
            }
        default:
            return state
    }
}

export default menuReducer;
