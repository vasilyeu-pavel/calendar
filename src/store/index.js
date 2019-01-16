import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer";
import logger from "redux-logger"


const enhancer = applyMiddleware( thunk, logger );

const store = createStore(reducer, {}, enhancer);

export default store;