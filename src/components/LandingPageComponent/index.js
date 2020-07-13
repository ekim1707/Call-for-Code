import React from 'react';
import "./styles.scss";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import Button from "../../common/Button";
import content from "./content";

const LandingPageComponent = ({
    clickCount,
    handlePageUpDownClick
}) => {
    return (
        <div className="landingPageContainer">
            <div className="landingPageContentContainer" style={{ transform: `translateY(calc(-100vh * ${clickCount}))` }}>
                <FirstPage />
                <SecondPage />
            </div>
            <div className="navArrowsButtonContainer">
                {clickCount === 0 &&
                    <Button 
                        onClick={() => handlePageUpDownClick("down")}
                        containerClassName="navArrowButtonContainer"
                        className="navArrowButton"
                        isIcon
                        iconName="arrow_down"
                    />
                }
                {clickCount !== 0 &&
                    <Button 
                        onClick={() => handlePageUpDownClick("up")}
                        containerClassName="navArrowButtonContainer"
                        className="navArrowButton"
                        isIcon
                        iconName="arrow_up"
                    />
                }
                <div className="seeMoreLabel">{clickCount === 0 ? content.SEE_MORE_LABEL : content.SIGN_UP_NOW}</div>
            </div>
        </div>
    )
};

export default LandingPageComponent;