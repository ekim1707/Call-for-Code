import basicService from "./basichttpservice";
import resources from '../environments/resources';

export const userService =  {
    getUserById: (id) => {
      return basicService
        .getRequestWithAuthorizationHeaders(resources.microserviceUrl + resources.userService.url + "/" + id);
    }
}

export default userService;