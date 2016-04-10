import {
  LOGIN_FACEBOOK_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  UPDATE_PROFILE,
  UPDATE_FAIL,
  INITIAL_UPDATE
} from '../constants/ActionTypes'

const initialState = {
  name: "",
  id: "",
  token: "",
  email: "",
  facebook: "",
  isLoading: false
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
      return state;
    case INITIAL_UPDATE:
      return Object.assign({}, state, {
        isLoading: true
      })
    case UPDATE_PROFILE:
      return Object.assign({}, state, action.user, {
        isLoading: false
      })
    case UPDATE_FAIL:
      return Object.assign({}, state, {
        isLoading: false
      });
    default:
      return state;
  }
}

export function getUser(state) {
  return state;
}
