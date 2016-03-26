import {
  LOGIN_FACEBOOK_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../constants/ActionTypes'

const initialState = {
  name: "",
  id: "",
  token: "",
  email: ""
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN_FACEBOOK_SUCCESS:
      return Object.assign({}, state, {
        id: action.user.id,
        name: action.user.name,
        token: action.user.accessToken
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        id: action.user.id,
        name: action.user.name,
        token: action.user.token,
        email: action.user.email
      });
    case LOGIN_FAIL:
      return Object.assign({}, state, {
        email: ""
      });
    default:
      return state;
  }
}

export function getUser(state) {
  return state;
}
