import userAPI from '../api/user'
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
        console.log("ALOHA");
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
