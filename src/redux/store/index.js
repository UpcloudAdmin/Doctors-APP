import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../saga";
import rootReducer from "../reducer/index";
import logger from "redux-logger";
let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];
const store = configureStore({
  reducer: {
    rootReducer,
  },
  middleware: () => {
    return [...middleware];
  },
});

sagaMiddleware.run(rootSaga);
export default store;
