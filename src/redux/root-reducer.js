import { combineReducers } from "redux";

import userReducer from "./user/use.reducer";

export default combineReducers({
    user: userReducer, 
})