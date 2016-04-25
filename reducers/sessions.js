import {
  REPLACE_SESSIONS
} from '../constants/ActionTypes'

const initialState = {
  value: []
}

export default function sessions(state = initialState, action) {
  switch (action.type) {
    case REPLACE_SESSIONS:
      return Object.assign({}, state, {
        value: action.exercises || []
      });
    default:
      return state;
  }
}

export function getSessions(state) {
  return state.sessions.value;
}
