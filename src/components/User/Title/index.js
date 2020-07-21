import React from 'react';
import { Header } from "semantic-ui-react";

const title= ({titleName}) => 
  <Header 
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      color: "#fff",
      fontFamily: "Playball",
      fontSize: "6vh"
    }} 
    as="h1"
  >
    {titleName}
  </Header>

export default title;