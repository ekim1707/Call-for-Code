import authenticationService from "./authenticationService"
export const basicHttpService = {
  postRequestWithAuthorizationHeaders: (url, body) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };
    return fetch(url, requestOptions)
  },
  getRequestWithAuthorizationHeaders: (url) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authenticationService.getToken()
      }
    };
    return fetch(url, requestOptions)
  }
}

export default basicHttpService;