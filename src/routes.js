import React from 'react';
import { Switch, Router, Route } from "react-router-dom";
import history from "./history";
import StartPageContainer from "./containers/StartPageContainer";
import HomeContainer from "./containers/HomeContainer";
import AboutContainer from "./containers/AboutContainer";

export default (props) => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" component={StartPageContainer} exact />
                <Route path="/home" component={HomeContainer} exact />
                <Route path="/about" component={AboutContainer} exact />
            </Switch>
        </Router>
    )
};