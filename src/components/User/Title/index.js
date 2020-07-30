import React from 'react';
import "./styles.scss";
import content from "./content";
import { 
  Header,
  Dropdown
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const title= ({titleName}) => 
  <Header 
    className="mainHeaderContainer"
    style={{
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      color: "#fff",
      fontFamily: "Playball",
      fontSize: "6vh",
      marginTop: 0
    }} 
    as="h1"
  >
    {titleName}
    <Dropdown
      icon='user circle'
      floating
      button
      className='icon'
      direction="left"
      style={{
        position: "absolute",
        right: 0,
        background: "transparent",
        fontSize: "1em"
      }}
    >
      <Dropdown.Menu position="left">
        <Link to={content.url}>
          <Dropdown.Item 
            style={{ 
              fontSize: "1rem",
              textAlign: "center"
            }} 
            text={content.name} 
          />
        </Link>
        <Dropdown.Divider style={{ margin: 0 }} />
        <Dropdown.Item icon='sign-out' text={content.logout} />
      </Dropdown.Menu>
    </Dropdown>
  </Header>

export default title;