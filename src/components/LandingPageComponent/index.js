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
                        className="contentButton"
                        buttonText="^"
                        disabled={clickCount === 0 ? true : false}
                    />
                    <Button 
                        onClick={() => handlePageUpDownClick("down")}
                        className="contentButton"
                        buttonText="v"
                        disabled={clickCount === 2 ? true : false}
                    />
                </div>
            </div>
        </div>
    )
};

export default LandingPageComponent;