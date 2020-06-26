import React from 'react';
import "./styles.scss";
import content from "./content";
import Icon from "../../../common/Icon";
import { Link } from "react-router-dom";

const FirstPage = () => {
    return (
        <div className="firstPageContainer">
            <div className="headerContainer">
                <div className="titleContainer">
                    <div className="iconContainer"><Icon className="logoIcon" iconName="decompress_white" /></div>
                    <h2 className="title">{content.TITLE}</h2>
                </div>
                <ul className="navLinkContainer">
                    {content.NAV_ARRAY.map((index, i) => {
                        return <Link to={index.toLowerCase()} className="navLinks" style={
                            i + 1 === content.NAV_ARRAY.length ? { border: "1px solid white" } : {}
                        } key={i}>{index}</Link>;
                    })}
                </ul>
            </div>
            <h1 className="bodyContainer">
                {content.BODY}
            </h1>
        </div>
    );
};

export default FirstPage;