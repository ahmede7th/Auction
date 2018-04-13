import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga, rootReducer} from './modules';
//import rootReducer from './modules';
//const initialState = {};

const sagaMiddleware = createSagaMiddleware();

export default createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
