import React, { useState } from 'react';
import LandingPageComponent from "../../components/LandingPageComponent";

const LandingPageContainer = () => {
    const [clickCount, setClickCount] = useState(0);

    const handlePageUpDownClick = (direction) => {
        direction === "down" ? setClickCount(clickCount + 1) : setClickCount(clickCount - 1);
    } 

    return (
        <LandingPageComponent 
            clickCount={clickCount}
            handlePageUpDownClick={handlePageUpDownClick}
        />
    )
};

export default LandingPageContainer;