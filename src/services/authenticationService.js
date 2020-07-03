import resources from '../environments/resources';
export const authenticationService = {
    properties: null,
    logIn: async (resourceUrl, body) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        };
        const response = await fetch(resources.microserviceUrl + resourceUrl, requestOptions);
        const data = await response.json();
        sessionStorage.setItem("sessionToken", data.jwt);
        window.location.replace(window.location.origin + resources.routes.userHomePage);
    },
    signUp: async (resourceUrl, body) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        };
        const response = await fetch(resources.microserviceUrl + resourceUrl, requestOptions);
        const data = await response.json();
    },
    getToken: () => {
        return sessionStorage.getItem("sessionToken")
    },
    logout: () => {
        sessionStorage.removeItem("sessionToken");
        authenticationService.redirectToLoginPage();
    },
    isTokenValid: () => {
        if (sessionStorage.getItem("sessionToken") !== null) {
            return true;
        }
        return false;
    },
    redirectToLoginPage: () => {
        window.location.replace(window.location.origin + resources.routes.logInPath);
    }
}

export default authenticationService;