import React from 'react';
import "./styles.scss";
import content from "./content";
import SidebarContainer from "../../containers/SidebarContainer";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import Button from "../../common/Button";

const LandingPageComponent = ({
    clickCount,
    handlePageUpDownClick
}) => {
    return (
        <div className="landingPageComponent">
            <SidebarContainer />
            <div className="landingPageContentContainer" style={{ transform: `translateY(calc(-100vh * ${clickCount}))` }}>
                <FirstPage />
                <SecondPage />
                <ThirdPage />
            </div>
            <div className="contentButtonsContainer">
                <div className="buttonContainer">
                    <Button 
                        onClick={() => handlePageUpDownClick("up")}
                        containerClassName="contentButtonContainer"
                        className="contentButton"
                        isIcon
                        iconName="arrow_up"
                        disabled={clickCount === 0 ? true : false}
                    />
                    <Button 
                        onClick={() => handlePageUpDownClick("down")}
                        containerClassName="contentButtonContainer"
                        className="contentButton"
                        isIcon
                        iconName="arrow_down"
                        disabled={clickCount === 2 ? true : false}
                    />
                    {clickCount === 0 && <label className="learnMoreLabel">Learn More</label>}
                </div>
            </div>
        </div>
    )
};

export default LandingPageComponent;