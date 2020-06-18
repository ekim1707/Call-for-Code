import React from 'react';
import "./styles.scss";
import content from "./content";
import Icon from "../../../common/Icon";
import { Link } from "react-router-dom";

const FirstPage = () => {
    return (
        <div className="firstPageContainer">
            <div className="firstPageNavContainer">
                <div className="iconContainer"><Icon className="logoIcon" iconName="temp" /></div>
                <ul className="firstPageNavLinks">
                    {content.NAV_ARRAY.map((index, i) => {
                        return <Link to={index.toLowerCase()} className="firstPageNavLinks" key={i}>{index}</Link>;
                    })}
                </ul>
            </div>
            <h1 className="firstPageHeader">
                {content.HEADER}
            </h1>
            <p className="firstPageBody">
                {content.BODY}
            </p>
        </div>
    );
};

export default FirstPage;