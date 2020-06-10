import React from 'react';
import { Switch, Router, Route } from "react-router-dom";
import history from "./history";
import LandingPageContainer from "./containers/LandingPageContainer";
import HomeContainer from "./containers/HomeContainer";

export default (props) => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" component={LandingPageContainer} exact />
                <Route path="/home" component={HomeContainer} exact />
            </Switch>
        </Router>
    )
};