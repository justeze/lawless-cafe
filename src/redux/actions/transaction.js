import { addTransaction } from '../../utils/reqData'
import * as actions from './actionTypes'

export const addTransactionCreator = (data) => {
    return {
        type: actions.ADD_TRANSACTION,
        payload: addTransaction(data)
    }
}

export const clearTransaction = () => {
    return {
        type: actions.TRANSACTION_CLEAR_STATE
    }
}