import basicService from "./basichttpservice";
import resources from '../environments/resources';

export const userService =  {
    getUserById: (id) => {
      return basicService
        .getRequestWithAuthorizationHeaders(resources.microserviceUrl + resources.userService.url + "/" + id)
        .then(res => console.log(res.data))
    }
  }

export default userService;