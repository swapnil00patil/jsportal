import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';
import initialState from './initialState';

export default function configureStore(state = initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store = createStore(
    rootReducer,
    state,
    compose(
      applyMiddleware(...middlewares),
      (window && window.devToolsExtension) ? window.devToolsExtension() : f => f
    )
  );
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  store.runSaga(rootSaga);
  return store;
};