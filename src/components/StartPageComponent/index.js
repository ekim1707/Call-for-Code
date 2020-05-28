import React from 'react';
import "./styles.scss";
import content from "./content";
import SidebarContainer from "../../containers/SidebarContainer";
import Icon from "../../common/Icon";
import { Link } from "react-router-dom";

const StartPageComponent = () => {
    return (
        <div className="startPageComponent">
            <SidebarContainer />
            <div className="startPageContentContainer">
                <div className="startPageNavContainer">
                    <div className="iconContainer"><Icon className="logoIcon" iconName="temp" /></div>
                    <ul className="startPageNavLinks">
                        {content.START_NAV_ARRAY.map((index, i) => {
                            return <li className="startPageNavLinks" key={i}>{index}</li>;
                        })}
                    </ul>
                </div>
                <div className="startPageContent">
                    <h1 className="contentHeader">
                        {content.HEADER}
                    </h1>
                    <p className="contentBody">
                        {content.BODY}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default StartPageComponent;