import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects'
import feathers from 'feathers/client';
import hooks from 'feathers-hooks';


export const rootReducer = combineReducers({ });

export default function* rootSaga(){
  yield [
  ];
}
