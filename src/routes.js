import React from 'react';
import { Switch, Router, Route } from "react-router-dom"
import history from "./history";
import {Redirect} from 'react-router';
import LandingPageContainer from "./containers/LandingPageContainer";
import SignUpContainer from "./containers/SignUpContainer";
import LoginContainer from "./containers/LogInContainer";
import SidebarContainer from "./containers/SidebarContainer";
import Title from "./components/User/Title";
import UserHomePageContainer from "./containers/UserContainer/HomePageContainer";
import UserDestressContainer from "./containers/UserContainer/DestressContainer";
import UserDiaryContainer from "./containers/UserContainer/DiaryContainer";
import UserNewsContainer from "./containers/UserContainer/NewsContainer";
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
        <div className = "displayFlex fullHeight userContentPageColor" >
          <div><SidebarContainer /></div>
          <div className = "columnFlexDirection fullWidth startContent" >
            <Title titleName = "Decompress" />
            <div className="userComponentsContainer">
              < PrivateRoute path={resources.routes.userProfilePage} component={UserHomePageContainer}/>
              <
                PrivateRoute
                path={resources.routes.userDestressPage}
                component={UserDestressContainer}/>
              <
                PrivateRoute
                path = {resources.routes.userJournalPage}
                component={UserDiaryContainer}/>
              <
                PrivateRoute
                path={resources.routes.userNewsPage}
                component={UserNewsContainer}/>
              <
                PrivateRoute
                path={resources.routes.userSelfCarePage}
                component={UserSelfCareContainer}/>
              <
                PrivateRoute
                path={resources.routes.userCoursesPage}
                component={UserCoursesContainer}/>
            </div>
          </div >
        </div>
      </Switch>
    </ Router >
  );
}