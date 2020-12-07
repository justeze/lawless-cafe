import { getHistory } from '../../utils/reqData'
import * as actions from './actionTypes'

export const getHistoryCreator = () => {
  console.log('kambing2')
    return {
        type: actions.HISTORY_FETCH,
        payload: getHistory()
    }
}