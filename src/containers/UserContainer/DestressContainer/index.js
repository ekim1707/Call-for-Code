import React from 'react';
import UserHomePage from "../../../components/User/HomePage";
import TitleComponent from "../../../components/User/Title";
import SidebarComponent from "../../../components/SidebarComponent"

const DestressContainer = () => {
  return ( 
  < div className = "displayFlex fullHeight userContentPageColor" > 
    < div >
      < SidebarComponent / >
    </ div>  
      <div className = "centeredJustifiedContent columnFlexDirection fullWidth startContent" >
        <TitleComponent titleName = "Decompress" / >
        < div > 
          < h1 > Destress are coming soon </ h1>
        </div>
      </div >
    </ div> );
    };

export default DestressContainer;