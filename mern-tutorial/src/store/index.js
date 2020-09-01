import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import mainReducer from "./reducers";
import logger from "redux-logger";

import mainSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  mainReducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(mainSaga);

export default store;