import basicService from "./basichttpservice";
import resources from '../environments/resources';

export const userService =  {
    getUserById: (id) => {
      return basicService.getRequestWithAuthorizationHeaders(resources.userService.url + "/" + id)
    },
    sayHi: () => {
      return "Helo";
    }
}

export default userService;