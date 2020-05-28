import React from 'react';
import "./styles.scss";
import content from "./content";
import Button from "../../common/Button";
import Icon from "../../common/Icon";

const StartPageComponent = ({
    isOpen,
    setIsOpen
}) => {
    return (
        <div className="startPageComponent">
            <div className="startPageSidebarContainer">
                <Button className="startPageSidebarButton" onClick={() => {setIsOpen(!isOpen)}} buttonText={content.EXPLORE} />
                <ul className="sidebarNavContainer" style={isOpen ? { right: "-350px" } : { right: "0" }}>
                    {content.SIDEBAR_NAV_ARRAY.map((index, i) => {
                        return <li className="sidebarNavLinks" key={i}>{index}</li>
                    })}
                </ul>
            </div>
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