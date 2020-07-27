import React, { useState } from 'react';
import "./styles.scss";
import content from "./content";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import Button from "../../common/Button";

const LandingPageComponent = () => {
    const [clickCount, setClickCount] = useState(0);
    const handlePageUpDownClick = (direction) => {
        direction === "down" ? setClickCount(clickCount + 1) : setClickCount(clickCount - 1);
    } 

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