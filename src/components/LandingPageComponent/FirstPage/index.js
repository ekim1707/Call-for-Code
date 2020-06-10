import React from 'react';
import "./styles.scss";
import content from "./content";

const FirstPage = () => {
    return (
        <div className="firstPageContainer">
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