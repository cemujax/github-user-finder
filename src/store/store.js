import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers/root";
import rootSaga from "./sagas/root";

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger();
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
