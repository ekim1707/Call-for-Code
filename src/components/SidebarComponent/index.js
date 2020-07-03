import React from 'react';
import "./styles.scss";
import content from "./content";
import Button from "../../common/Button";
import Icon from "../../common/Icon";
import { NavLink } from "react-router-dom";

const SidebarComponent = ({
    isOpen,
    setIsOpen
}) => {
    return (
        <div className="sidebarComponent">
            <Button className="sidebarButton" onClick={() => {setIsOpen(!isOpen)}} buttonText={content.EXPLORE} />
            <ul className="sidebarNavContainer" style={isOpen ? { right: "-350px" } : { right: "0" }}>
                <div className="iconContainer"><Icon className="logoIcon" iconName="decompress_transparent" /></div>
                {content.SIDEBAR_NAV_ARRAY.map((index, i) => {
                    return <NavLink to={index.toLowerCase()} className="sidebarNavLinks" key={i}>
                                <Icon className="sidebarNavLinkIcons" iconName={`${index.toLowerCase()}_white`} />
                                {index}
                            </NavLink>
                })}
            </ul>
        </div>
    )
};

export default SidebarComponent;