import React, { useState } from 'react';
import StartPageComponent from "../../components/StartPageComponent";

const StartPageContainer = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <StartPageComponent
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        />
    )
};

export default StartPageContainer;