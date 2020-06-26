import React from 'react';
import "./styles.scss";
import content from "./content";
import Icon from "../../../common/Icon";
import Button from "../../../common/Button";

const ThirdPage = () => {
    return (
        <div className="thirdPageContainer">
            <Icon className="mainIcon" iconName="decompress" />
            <div className="bodyContainer">
                <h2 className="header">{content.HEADER}</h2>
                <h3 className="subHeader">{content.SUB_HEADER}</h3>
                <p className="description">{content.DESCRIPTION}</p>
                <Button 
                    className="downloadButton"
                    buttonText={content.BUTTON_LABEL}
                />
            </div>
        </div>
    );
};

export default ThirdPage;