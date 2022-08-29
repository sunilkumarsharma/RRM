import { combineReducers } from "@reduxjs/toolkit";
import GetUserList from './users';

const rootReducer = combineReducers({
    GetUserList,
});

export default rootReducer;