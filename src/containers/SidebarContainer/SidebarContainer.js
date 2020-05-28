import React, { useState } from 'react';
import SidebarComponent from "../../components/SidebarComponent";

const SidebarContainer = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <SidebarComponent 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        />
    )
};

export default SidebarContainer;