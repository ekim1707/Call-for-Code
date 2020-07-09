import React from 'react';
import { Switch, Router, Route } from "react-router-dom"
import history from "./history";
import { Redirect } from 'react-router';
import LandingPageContainer from "./containers/LandingPageContainer";
import SignUpContainer from "./containers/SignUpContainer";
import LoginContainer from "./containers/LogInContainer";
import UserHomePageContainer from "./containers/UserContainer/HomePageContainer";
import resources from "./environments/resources";
import authenticationService from './services/authenticationService';

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
		authenticationService.isTokenValid() ? <Component {...props} /> : <Redirect to='/login' /> 
	)} />
)

export default () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path={resources.routes.basePath} component={LandingPageContainer} exact />
                <Route path={resources.routes.signUpPath} component={SignUpContainer} exact />
                <Route path={resources.routes.logInPath} component={LoginContainer} exact />
				<PrivateRoute path={resources.routes.userHomePage} component={UserHomePageContainer} />
            </Switch>
        </Router>
    )
};