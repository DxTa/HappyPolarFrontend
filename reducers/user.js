import {
  LOGIN_FACEBOOK_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  UPDATE_PROFILE
} from '../constants/ActionTypes'

const initialState = {
  name: "",
  id: "",
  token: "",
  email: "",
  facebook: ""
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
      return Object.assign({}, state, action.user);
    case LOGIN_FAIL:
      return Object.assign({}, state, {
        email: ""
      });
    case UPDATE_PROFILE:
      return Object.assign({}, state, action.user)
    default:
      return state;
  }
}

export function getUser(state) {
  return state;
}
