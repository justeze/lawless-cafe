import { combineReducers } from "redux";
import authReducer from "./auth";
import menuReducer from "./menu";
import transactionReducer from "./transaction";
import historyReducer from "./history";

const indexReducer = combineReducers({
	menu: menuReducer,
	transaction: transactionReducer,
	history: historyReducer,
	auth: authReducer,
});

export default indexReducer;
