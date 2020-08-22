import {combineReducers} from "redux";
import filterReducer from "./filterReducer";
import gameListReducer from "./gameListReducer";
import basketReducer from "./basketReducer";

export const rootReducer = combineReducers({
    filterReducer,
    gameListReducer,
    basketReducer
})