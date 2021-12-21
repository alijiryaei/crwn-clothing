import { createStore , applyMiddleware} from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "@redux-saga/core";

import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware()
const middlewares = [logger , sagaMiddleware]
export const store = createStore(rootReducer , applyMiddleware(...middlewares))
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);