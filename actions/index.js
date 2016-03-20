import userAPI from '../api/user'
import * as types from '../constants/ActionTypes';

export function facebookCallback(authInfo) {
  console.log("AAA", authInfo);
  return dispatch => {
    dispatch({
      type: types.LOGIN_FACEBOOK_SUCCESS,
      user: authInfo
    })
  }
}

export function login(user) {
  console.log(user);
  return (dispatch, getState) => {
    // console.log("BBB", getState());
    // const user = getState().user;

    // dispatch({
      // type: types.LOGIN,
      // authInfo
    // });
    userAPI.login(user, () => {
      dispatch({
        type: types.LOGIN_SUCCESS,
        user
      });
      // // Replace the line above with line below to rollback on failure:
      // // dispatch({ type: types.CHECKOUT_FAILURE, cart })
    })
  }
}
