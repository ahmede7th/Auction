import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects'
import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import socketio from 'feathers-socketio/client';
import authentication from 'feathers-authentication-client';
import rest from 'feathers-rest/client';
import superagent from 'superagent';
import io from 'socket.io-client'

import * as userSagas from './user/sagas';
import { user } from './user/reducers';



export const rootReducer = combineReducers({
  form: fromReducer,
  user,
 });


export function* rootSaga(){
  yield Object.values(userSagas).map(fork);
}

const host = 'http://localhost:3030/';
const socket = io(host);

const socketApp = feathers()
  .configure(socketio(socket))
  .configure(hooks())
  //.configure(rest(host).superagent(superagent))

const restApp = feathers()
  .configure(rest(host).superagent(superagent))
  .configure(hooks())
  .configure(authentication({}));

export const users = restApp.service('users');
 
