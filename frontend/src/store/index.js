import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger"; // TODO remove logger before deploy

import mainReducer from "./reducers"; // The main reducer is an combination of differents reducers
import mainSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  mainReducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(mainSaga);

export default store;