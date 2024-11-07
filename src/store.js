import {legacy_createStore, applyMiddleware } from "redux";
import todoReducer from "./reducer";
import { thunk } from "redux-thunk";


const store=legacy_createStore(
    todoReducer,applyMiddleware(thunk)
);
export default  store;

