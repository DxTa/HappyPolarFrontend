import {
  LOGIN_FACEBOOK_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT
} from '../constants/ActionTypes'

const initialState = {
  name: "",
  id: "",
  accessToken: ""
}

export default function user(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case LOGIN_FACEBOOK_SUCCESS:
      return Object.assign({}, state, {
        id: action.id,
        name: action.name,
        accessToken: action.accessToken
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        id: action.id,
        name: action.name,
        accessToken: action.accessToken
      });
    default:
      return state
  }
}

export function getUser(state) {
  return state;
}
