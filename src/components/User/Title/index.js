import React from 'react';

const title= ({titleName}) => {
  return ( 
    <div>
      < h1 className = "appNameFontFamily appNameFontSize centerAlignedText" >
        {titleName} 
      </h1>
      <hr/>
    </div>
  );
}

export default title;