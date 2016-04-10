import { Endpoints } from '../constants/api';
// const TIMEOUT = 100
export default {
  login(payload, cb) {
    const {
      id,
      name,
      accessToken
    } = payload;
    fetch(Endpoints.LOGIN, {
      // mode: 'no-cors',
      // credentials: 'same-origin',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_token: accessToken
      })
    })
    .then((response) => response.json())
    .then((responseJSON) => {
      return cb(responseJSON);
    })
    .catch((error) => {
      console.log("ERROR", error);
    })
    // return cb();
    // return
  },

  fetchProfile(id, cb) {
    fetch(Endpoints.USERS + id)
    .then((response) => {
      console.log(response)
      response.json()
    })
    .then((responseJSON) => {
      console.log(responseJSON);
      return cb(responseJSON);
    })
    .catch((error) => {
      console.log("ERROR", error);
    })
  },

  updateProfile(payload, cb) {
    const {
      _id,
      age,
      height,
      weight
    } = payload;
    fetch(Endpoints.USERS + _id, {
      // mode: 'no-cors',
      // credentials: 'same-origin',
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        age,
        height,
        weight
      })
    })
    .then((response) => response.json())
    .then((responseJSON) => {
      return cb(responseJSON);
    })
    .catch((error) => {
      console.log("ERROR", error);
    })
    // return cb();
    // return
  }

}
