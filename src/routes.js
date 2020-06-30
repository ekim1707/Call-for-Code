import React from 'react';
import { Switch, Router, Route } from "react-router-dom";
import history from "./history";
import Header from "./components/HeaderComponent";
import LandingPageContainer from "./containers/LandingPageContainer";
import NewsContainer from "./containers/NewsContainer";

export default () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" component={LandingPageContainer} exact />
                <div className="userRoutesContainer">
                    <Header />
                    <Route path="/news" component={NewsContainer} exact />
                </div>
            </Switch>
        </Router>
    )
};