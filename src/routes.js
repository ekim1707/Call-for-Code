import React, { Component } from 'react';
import { Switch, Router, Route } from "react-router-dom"
import history from "./history";
<<<<<<< HEAD
import { Redirect } from 'react-router';
import LandingPageContainer from "./containers/LandingPageContainer";
import HomeContainer from "./containers/HomeContainer";
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
=======
import Header from "./components/HeaderComponent";
import LandingPageContainer from "./containers/LandingPageContainer";
import NewsContainer from "./containers/NewsContainer";
>>>>>>> 7b3ec1e3614d4c8aee3995916fbcf86b1dadc113

export default () => {
    return (
        <Router history={history}>
            <Switch>
<<<<<<< HEAD
                <Route path={resources.routes.basePath} component={LandingPageContainer} exact />
                <Route path={resources.routes.homePath} component={HomeContainer} exact />
                <Route path={resources.routes.signUpPath} component={SignUpContainer} exact />
                <Route path={resources.routes.logInPath} component={LoginContainer} exact />
				<PrivateRoute path={resources.routes.userHomePage} component={UserHomePageContainer} />
=======
                <Route path="/" component={LandingPageContainer} exact />
                <div className="userRoutesContainer">
                    <Header />
                    <Route path="/news" component={NewsContainer} exact />
                </div>
>>>>>>> 7b3ec1e3614d4c8aee3995916fbcf86b1dadc113
            </Switch>
        </Router>
    )
};