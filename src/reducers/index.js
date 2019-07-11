import { combineReducers } from "redux";
import auth from "./authReduecr";
import loading from "./loadingReducer";
import record from "./recordReducer";

export default combineReducers({ auth, loading, record });
