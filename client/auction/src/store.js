import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules';
import rootReducer from './modules';


const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

export default store;

sagaMiddleware.run(rootSaga);
