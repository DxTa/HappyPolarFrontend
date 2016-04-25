import { Endpoints } from '../constants/api';
// const TIMEOUT = 100
export default {

  fetchOne(id, cb) {
    fetch(Endpoints.EXERCISES + id)
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

  fetchAll(token, cb) {
    fetch(Endpoints.EXERCISES, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + token
      }
    })
    .then((response) => response.json())
    .then((responseJSON) => {
      return cb(responseJSON);
    })
    .catch((error) => {
      console.log("ERROR", error);
    })
  },

  fetchSessions(id, token, cb) {
    fetch(Endpoints.EXERCISES + id + "/sessions/", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + token
      }
    })
    .then((response) => response.json())
    .then((responseJSON) => {
      return cb(responseJSON);
    })
    .catch((error) => {
      console.log("ERROR", error);
    })
  }

}
