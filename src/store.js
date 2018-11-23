import  createSagaMiddleware  from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import betareducer from './beta/reducer';
import rootSaga from './saga/saga';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  betareducer,
  applyMiddleware(sagaMiddleware)
);
console.log('Store');
sagaMiddleware.run(rootSaga);
