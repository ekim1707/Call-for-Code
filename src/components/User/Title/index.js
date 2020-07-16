import React from 'react';
import "./styles.scss";

const title= ({titleName}) => {
  return ( 
    <div className="titleContainer">
      < h1 className = "appNameFontFamily appNameFontSize centerAlignedText" >
        {titleName} 
      </h1>
    </div>
  );
}

export default title;