import React from 'react';
import { Switch, Router, Route } from "react-router-dom";
import history from "./history";
import HomeContainer from "./containers/HomeContainer";
import AboutContainer from "./containers/AboutContainer";

export default (props) => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" component={HomeContainer} exact />
                <Route path="/about" component={AboutContainer} exact />
            </Switch>
        </Router>
    )
};