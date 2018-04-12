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

const host = 'http://localhost:3030/';

const socket = io(host);
const app = feathers()
  .configure(socketio(socket))
  .configure(rest(host).superagent(superagent))
  .config(hooks())
  .configure(authentication({ storage: window.localStorage }));
