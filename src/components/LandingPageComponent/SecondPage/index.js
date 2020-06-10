import React from 'react';
import "./styles.scss";
import content from "./content";
import Icon from "../../../common/Icon";
import Button from "../../../common/Button";

const SecondPage = () => {
    return (
        <div className="secondPageContainer">
            <div className="headerContainer">
                <Icon className="headerIcon" iconName="temp" />
                <h2 className="header">{content.HEADER}</h2>
                <div className="titleContainer">
                    <h2 className="title">{content.TITLE}</h2>
                    <div className="titleOffsetBorderBottom"></div>
                </div>
                <h3 className="description">{content.DESCRIPTION}</h3>
            </div>
            <div className="bodyContainer">
                <h2 className="bodyHeader">{content.BODY_HEADER}</h2>
                <div className="bodyContentContainer">
                    {content.BODY_DIVS_ARRAY.map((DIV, i) => 
                        <div className="bodyContentSubContainer" key={i}>
                            <Icon className="bodyContentIcon" iconName="temp"  />
                            <h4>{DIV.TITLE}</h4>
                            <p>{DIV.DESCRIPTION}</p>
                        </div>
                    )}
                </div>
                <Button 
                    className="footerNavButton"
                    disabled
                />
            </div>
        </div>
    );
};

export default SecondPage;