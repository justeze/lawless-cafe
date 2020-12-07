import { addItems, getCategory, getMenu, getMenuSearch, editItems } from '../../utils/reqData'
import { createAsyncAction } from "redux-promise-middleware-actions";
import * as actions from './actionTypes'

export const getMenuCreator = () => {
    return {
        type: actions.MENU_FETCH,
        payload: getMenu()
    }
}

export const getMenuSearchCreator = (nama_produk) => {
    return {
        type: actions.MENU_FETCH_SEARCH,
        payload: getMenuSearch(nama_produk)
    }
}

export const addToCart = (id, name, price, img) => {
    // console.log('asu')
    return {
        type: actions.ADD_TO_CART,
        payload: {
            id,
            name,
            qty: 1,
            price,
            img,
        }
    }
}

export const increaseQty = (id) => {
    return {
        type: actions.INCREASE_QUANTITY,
        payload: {
            id: id,
        }
    }
}

export const decreaseQty = (id) => {
    return {
        type: actions.DECREASE_QUANTITY,
        payload: {
            id: id,
        }
    }
}

export const clearCart = () => {
    return {
        type: actions.CLEAR_CART
    }
}

export const clearMenu = () => {
    return {
        type: actions.MENU_CLEAR_STATE
    }
}

export const getCtgrCreator = () => {
    return {
        type: actions.CTGR_FETCH,
        payload: getCategory()
    }
}

export const addItemsCreator = (name, price, ctgr, img) => {
    return {
        type: actions.ADD_ITEMS,
        payload: addItems(name, price, ctgr, img)
    }
}

export const editItemMenu = (id, name, price, category, img) => {
    return {
        type: actions.EDIT_ITEM_STATE,
        payload: { id, name, price, category, img }
    }
}

export const editItemsCreator = createAsyncAction("EDIT_MENU",
    async (id, name, price, ctgr, img) => {
        const res = await editItems(id, name, price, ctgr, img)
        return res.data
    }) 