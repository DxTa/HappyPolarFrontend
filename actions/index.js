import userAPI from '../api/user'
import exerciseAPI from '../api/exercise'
import sessionAPI from '../api/session'
import * as types from '../constants/ActionTypes';

export function facebookCallback(authInfo) {
  return (dispatch, state) => {
    dispatch({
      type: types.LOGIN_FACEBOOK_SUCCESS,
      user: authInfo
    });
    userAPI.login(authInfo, (res) => {

      if (res.facebook) {
        dispatch({
          type: types.LOGIN_SUCCESS,
          user: res
        });
      } else {
        dispatch({
          type: types.LOGIN_FAIL
        });
      }

      // // Replace the line above with line below to rollback on failure:
      // // dispatch({ type: types.CHECKOUT_FAILURE, cart })
    })
  }
}

export function fetchProfile(id) {
  return(dispatch, state) => {
    userAPI.fetchProfile(id, (res) => {
      if (res.error) {
        // dispatch({
          // type: types.LOGIN_FAIL
        // });
      } else {
        dispatch({
          type: types.UPDATE_PROFILE,
          user: res
        });
      }

      // // Replace the line above with line below to rollback on failure:
      // // dispatch({ type: types.CHECKOUT_FAILURE, cart })
    })
  }
}

export function updateProfile(toUpdate) {
  return(dispatch, getState) => {
    dispatch({
      type: types.INITIAL_UPDATE
    });
    const token = getState().user.token
    userAPI.updateProfile(token, toUpdate, (res) => {
      if (res.error) {
        dispatch({
          type: types.UPDATE_FAIL
        });
      } else {
        dispatch({
          type: types.UPDATE_PROFILE,
          user: res
        });
      }
    })
  }
}

export function fetchExercises() {
  return(dispatch, getState) => {
    const token = getState().user.token
    exerciseAPI.fetchAll(token, (res) => {
      if (res.error) {
        // dispatch({
          // type: types.UPDATE_FAIL
        // });
      } else {
        dispatch({
          type: types.REPLACE_EXERCISES,
          exercises: res
        });
      }
    })
  }
}

export function fetchSessions() {
  return(dispatch, getState) => {
    const token = getState().user.token
    sessionAPI.fetchAll(token, (res) => {
      if (res.error) {
        // dispatch({
          // type: types.UPDATE_FAIL
        // });
      } else {
        dispatch({
          type: types.REPLACE_SESSIONS,
          sessions: res
        });
      }
    })
  }
}

export function fetchExercise(id) {
  return(dispatch, getState) => {
    const token = getState().user.token
    exerciseAPI.fetchSessions(id, token, (res) => {
      if (res.error) {
        // dispatch({
          // type: types.UPDATE_FAIL
        // });
      } else {
        dispatch({
          type: types.REPLACE_SESSIONS,
          exercise_id: id,
          sessions: res
        });
      }
    })
  }
}
