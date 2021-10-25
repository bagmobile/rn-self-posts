import {createStore, combineReducers} from "redux";
import {postReducer} from "./reducers/postReducer";

const rootReducer = combineReducers({
   postReducer
})

export default createStore(rootReducer);
