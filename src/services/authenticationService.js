import resources from '../environments/resources';
import decoder from "jwt-decode";

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
        window.location.replace(window.location.origin + resources.routes.userProfilePage);
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
    },
    redirectToSignUpPage: () => {
        window.location.replace(window.location.origin + resources.routes.signUpPath);
    },

    getDecodedJwt: () => {
        return decoder(sessionStorage.getItem("sessionToken"));
    }
}

export default authenticationService;