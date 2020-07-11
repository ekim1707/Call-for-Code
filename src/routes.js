import React from 'react';
import { Switch, Router, Route } from "react-router-dom"
import history from "./history";
import {Redirect} from 'react-router';
import LandingPageContainer from "./containers/LandingPageContainer";
import SignUpContainer from "./containers/SignUpContainer";
import LoginContainer from "./containers/LogInContainer";
import UserHomePageContainer from "./containers/UserContainer/HomePageContainer";
import DestressContainer from "./containers/UserContainer/DestressContainer";
import UserDiaryContainer from "./containers/UserContainer/DiaryContainer";
import NewsContainer from "./containers/UserContainer/NewsContainer";
import UserSelfCareContainer from "./containers/UserContainer/SelfCareContainer";
import UserCoursesContainer from "./containers/UserContainer/CoursesContainer"
import resources from "./environments/resources";
import authenticationService from './services/authenticationService';

const PrivateRoute = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (authenticationService.isTokenValid()
    ? <Component {...props}/>
    : <Redirect to='/login'/>)}/>
)

export default() => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={resources.routes.basePath} component={LandingPageContainer} exact/>
        <Route path={resources.routes.signUpPath} component={SignUpContainer} exact/>
        <Route path={resources.routes.logInPath} component={LoginContainer} exact/>
        < PrivateRoute path={resources.routes.userProfilePage} component={UserHomePageContainer}/>
        <
          PrivateRoute
          path={resources.routes.userDestressPage}
          component={DestressContainer}/>
        <
          PrivateRoute
          path={resources.routes.userDiaryPage}
          component={UserDiaryContainer}/>
        < PrivateRoute path={resources.routes.userNewsPage} component={NewsContainer}/>
        <
          PrivateRoute
          path={resources.routes.userSelfCarePage}
          component={UserSelfCareContainer}/>
        <
          PrivateRoute
          path={resources.routes.userCoursesPage}
          component={UserCoursesContainer}/>
      </Switch>
    </ Router >
  );
}