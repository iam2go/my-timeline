import { all } from "@redux-saga/core/effects";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { timelineReducer, timelineWatcher } from "../features";

export const rootReducer = combineReducers({
  timeline: timelineReducer,
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([timelineWatcher()]);
}

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default createStore;
