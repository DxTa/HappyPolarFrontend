import { Endpoints } from '../constants/api';
// const TIMEOUT = 100
export default {

  fetchAll(token, cb) {
    fetch(Endpoints.SESSIONS, {
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
