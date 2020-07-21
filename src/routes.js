import React from 'react';
import { Switch, Router, Route } from "react-router-dom"
import history from "./history";
import { Redirect } from 'react-router';
import { Grid } from "semantic-ui-react";
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
        <Grid style={{ 
          height: "100vh", 
          margin: "0",
          overflow: "hidden" 
        }}>
          <Grid.Row style={{ height: "12vh", background: "#93AFD6" }} columns={1}>
            <Grid.Column>
              <Title titleName = "Decompress" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ 
            height: "88vh",
            padding: "0"
          }}>
            <Grid.Column style={{ 
              height: "100%",
              background: "#93AFD6",
              color: "#fff"
            }} width={2}>
              <SidebarContainer />
            </Grid.Column>
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
          </Grid.Row>
        </Grid>
      </Switch>
    </Router>
  );
}