import { createStore, applyMiddleware } from "redux";
import rootSaga from "../sagas";
import reducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { createBrowserHistory } from "history";

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const configureStore = initialState => {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(sagaMiddleware, logger)
  );
  sagaMiddleware.run(rootSaga, { history });
  return store;
};

export default configureStore;
