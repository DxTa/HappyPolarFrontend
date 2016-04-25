import {
  REPLACE_EXERCISES,
  REPLACE_SESSIONS
} from '../constants/ActionTypes'

const initialState = {
  value: []
}

export default function exercises(state = initialState, action) {
  switch (action.type) {
    case REPLACE_EXERCISES:
      return Object.assign({}, state, {
        value: action.exercises
      });
    // case REPLACE_SESSIONS:
      // state.value.forEach((exercise) => {
        // if (exercise._id == action.exercise_id) {
          // exercise = Object.assign({}, exercise, {
            // sessions: action.sessions
          // });
        // }
      // });
      // return state;
    default:
      return state;
  }
}

export function getExercises(state) {
  return state.exercises.value;
}

export function getExercise(id, state) {
  return state.exercises.value.find(x => x._id == id);
}
