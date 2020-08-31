import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import mainReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  mainReducer,
  //applyMiddleware(sagaMiddleware),
);

//sagaMiddleware.run();

export default store;