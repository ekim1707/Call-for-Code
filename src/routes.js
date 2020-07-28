import React from 'react';
import { Switch, Router, Route } from "react-router-dom"
import history from "./history";
import { Redirect } from 'react-router';
import { Grid } from "semantic-ui-react";
import LandingPageComponent from "./components/LandingPageComponent";
import SignUpComponent from "./components/SignUpComponent";
import LoginComponent from "./components/LogInComponent";
import SidebarComponent from "./components/SidebarComponent";
import Title from "./components/User/Title";
import UserHomePageComponent from "./components/User/HomePage";
import UserDestressComponent from "./components/User/DestressComponent";
import UserJournalComponent from "./components/User/JournalComponent";
import UserNewsComponent from "./components/User/NewsComponent";
import UserSelfCareComponent from "./components/User/SelfCareComponent";
import UserCoursesComponent from "./components/User/CoursesComponent"
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
);

export default() => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={resources.routes.basePath} component={LandingPageComponent} exact/>
        <Route path={resources.routes.signUpPath} component={SignUpComponent} exact/>
        <Route path={resources.routes.logInPath} component={LoginComponent} exact/>
        <React.Fragment>
          <Grid style={{ 
            height: "100vh", 
            margin: "0",
            overflow: "hidden" 
          }}>
            <Grid.Row style={{ height: "12vh", background: "#93AFD6" }} columns={1}>
              <Grid.Column><Title titleName = "Decompress" /></Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ 
              height: "88vh",
              padding: "0"
            }}>
              <SidebarComponent />
              <Route path={resources.routes.userProfilePage} component={UserHomePageComponent} />
              <Route path={resources.routes.userDestressPage} component={UserDestressComponent} />
              <Route path={resources.routes.userJournalPage} component={UserJournalComponent} />
              <Route path={resources.routes.userNewsPage} component={UserNewsComponent} />
              <Route path={resources.routes.userSelfCarePage} component={UserSelfCareComponent}  />
              <Route path={resources.routes.userCoursesPage} component={UserCoursesComponent} />
            </Grid.Row>
          </Grid>
        </React.Fragment>
      </Switch>
    </Router>
  );
}