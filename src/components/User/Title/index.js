import React from 'react';

const title= (props) => {
  return ( 
    <div>
      < h1 className = "appNameFontFamily appNameFontSize centerAlignedText" >
        {props.titleName} 
      </h1>
      <hr/>
    </div>
  );
}

export default title;