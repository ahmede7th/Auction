import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects'
import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import socketio from 'feathers-socketio/client';
import authentication from 'feathers-authentication-client';
import rest from 'feathers-rest/client';
import superagent from 'superagent';

export const rootReducer = combineReducers({ });

export default function* rootSaga(){
  yield [
  ];
}
const socket = io('http://localhost:3030/');
const app = feathers()
  .configure(socketio(socket))
  .configure(rest('http://localhost:3030').superagent(superagent))
  .config(hooks())
  .configure(authentication({ storage: window.localStorage }));
