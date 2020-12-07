import { ActionType } from 'redux-promise-middleware';

export const AUTH_LOGIN_USER = 'authLoginUser'
export const AUTH_REGISTER_USER = 'authRegisterUser'
export const AUTH_LOGOUT_USER = 'authLogoutUser'
export const AUTH_RESET_PASSWORD = 'authResetPassword'
export const AUTH_RESET_FULLFILED = 'authResetFullfiled'
export const AUTH_CLEAR_STATE = 'authClearState'

export const MENU_FETCH = 'fetchMenu'
export const MENU_FETCH_SEARCH = 'searchMenu'
export const INCREASE_QUANTITY = 'incQty';
export const DECREASE_QUANTITY = 'decQty';
export const ADD_TO_CART = 'addToCart';
export const CLEAR_CART = 'clearCart';
export const CTGR_FETCH = 'fetchCategory'
export const ADD_ITEMS ='addItems'
export const EDIT_ITEM_STATE = 'editItemsState'
export const EDIT_ITEMS = 'editItems'
export const MENU_CLEAR_STATE = 'menuClear'

export const ADD_TRANSACTION = 'addTransaction'
export const TRANSACTION_CLEAR_STATE = 'transactionClear'

export const HISTORY_FETCH = 'fetchHistory'

export const PENDING = `_${ActionType.Pending}`;
export const FULFILLED = `_${ActionType.Fulfilled}`;
export const REJECTED = `_${ActionType.Rejected}`;