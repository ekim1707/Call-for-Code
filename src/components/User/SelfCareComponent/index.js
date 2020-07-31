import React from 'react';
import content from "./content";
import { 
    Grid,
    Header,
    Divider,
    Container,
    List,
    Image
} from "semantic-ui-react";

const SelfCareComponent = () => {
    return (
        <Grid.Column 
            style={{ 
                padding: "0 30px"
            }} 
            width={14}
        >
            <Header style={{
                width: "90%",
                margin: "2rem 0",
                color: "#93AFD6",
                fontSize: "6vh",
                textAlign: "left"
            }}>
                {content.TITLE}
            </Header>
            <Divider style={{ borderTop: "3px solid rgba(34,36,38,.15)" }} />
            <React.Fragment>
        <Image 
            src={`${process.env.PUBLIC_URL}/img/under_construction.gif`} 
            wrapped 
            ui={false} 
            style={{
                position: "fixed",
                left: "25%",
                top: "16%",
                zIndex: 1000
            }}
        />
            <Container style={{ 
                position: "fixed",
                display: "flex",
                flexFlow: "column nowrap",
                alignItems: "center",
                width: "100%",
                height: "71vh",
                left: 0,
                opacity: .3,
                cursor: "not-allowed"
            }}>
                <Header as="h1" style={{
                    color: "purple",
                    fontSize: "3rem"
                }}>
                    {content.HEADER1}
                </Header>
                <List style={{ 
                    padding: "1em 2em",
                    background: "rgb(147, 175, 214)",
                    fontSize: "1.75rem",
                    borderRadius: "35px"
                }}>
                    {content.MENU_BUTTONS_ARRAY.map((BUTTON_TEXT, i) => 
                        <List.Item 
                            style={{
                                width: "25em",
                                margin: "1em 0",
                                padding: ".5em",
                                background: "whitesmoke",
                                borderRadius: "25px",
                                textAlign: "center",
                                cursor: "pointer"
                            }}
                            key={i}
                        >
                            {BUTTON_TEXT}
                        </List.Item>
                    )}
                </List>
            </Container>
            </React.Fragment>
        </Grid.Column>
    )
};

export default SelfCareComponent;