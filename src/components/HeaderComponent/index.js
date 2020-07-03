import React from 'react';
import "./styles.scss";
import content from "./content";
import Icon from "../../common/Icon";

const Header = () => 
    <div className="mainHeaderContainer">
        <Icon className="mainHeaderIcon" iconName="decompress" />
        <h2 className="title">{content.TITLE}</h2>
    </div>;

export default Header;