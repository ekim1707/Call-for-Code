import authenticationService from "./authenticationService"
import axios from 'axios';
export const basicHttpService = {
  postRequestWithAuthorizationHeaders: (url, body) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + authenticationService.getToken()
      },
      body: JSON.stringify(body)
    };
    return fetch(url, requestOptions)
  },
  getRequestWithAuthorizationHeaders: (url) => {
    // const requestOptions = {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': "Bearer " + authenticationService.getToken()
    //   }
    // };
    axios.defaults.headers.common = {
      'Authorization': "Bearer " + authenticationService.getToken()
    }
    return axios.get(url);
    // return fetch(url, requestOptions);
  }
}

export default basicHttpService;