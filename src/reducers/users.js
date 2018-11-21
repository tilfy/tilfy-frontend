import { combineReducers } from 'redux';

const INITIAL_STATE = {
  baseUrl: process.env.REACT_APP_API_URL,
  auth: {
    'access-token': '',
    client: '',
    expiry: '',
    'token-type': '',
    uid: '',
    authorize: false
  }
}

function data(state=INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_AUTH':
      return { 
        ...state,
        auth: {
          'access-token': action.payload['access-token'],
          client: action.payload['client'],
          expiry: action.payload['expiry'],
          'token-type': action.payload['token-type'],
          uid: action.payload['uid'],
          authorize: true
        }
      }
    case 'DESTROY_SESSION':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default combineReducers({data});