import { combineReducers } from "redux";

import userReducer from "./user";
import bookesReducer from "./book";

const rootReducer = combineReducers({ user: userReducer, bookesReducer });

export default rootReducer;