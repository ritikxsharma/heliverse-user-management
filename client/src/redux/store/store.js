import { combineReducers, createStore } from "redux";
import userReducer from "../reducers/userReducer";

const rootReducer = combineReducers({
    users: userReducer
})

const store = createStore(rootReducer)

export default store
