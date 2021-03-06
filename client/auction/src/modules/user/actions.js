import { createAction } from 'redux-actions';

export const REQUEST_SIGNUP = 'REQUEST_SIGNUP';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';


export const receiveLogin = createAction(RECEIVE_LOGIN);
export const requestLogin = createAction(REQUEST_LOGIN);
export const requestSignup = createAction(REQUEST_SIGNUP);
