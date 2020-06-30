import React from 'react';
import "./styles.scss";
import content from "./content";
import Header from "../../HeaderComponent";
import { Link } from "react-router-dom";

const FirstPage = () => {
    return (
        <div className="firstPageContainer">
            <div className="headerContainer">
                <Header />
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