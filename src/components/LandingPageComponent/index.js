import React from 'react';
import "./styles.scss";
import content from "./content";
import SidebarContainer from "../../containers/SidebarContainer";
import Icon from "../../common/Icon";
import { Link } from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

const LandingPageComponent = () => {
    return (
        <div className="landingPageComponent">
            <SidebarContainer />
            <div className="landingPageContentContainer">
                <div className="landingPageNavContainer">
                    <div className="iconContainer"><Icon className="logoIcon" iconName="temp" /></div>
                    <ul className="landingPageNavLinks">
                        {content.LANDING_NAV_ARRAY.map((index, i) => {
                            return <Link to={index.toLowerCase()} className="landingPageNavLinks" key={i}>{index}</Link>;
                        })}
                    </ul>
                </div>
                <FirstPage />
                <SecondPage />
                <ThirdPage />
            </div>
        </div>
    )
};

export default LandingPageComponent;