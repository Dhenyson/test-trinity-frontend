import { combineReducers } from "redux";
import user from './UserReducer'
import repositories from "./RepositReducer";

export default combineReducers({
    user,
    repositories
})