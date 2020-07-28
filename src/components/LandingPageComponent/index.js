import React, { useState } from 'react';
import content from "./content";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import {
    Grid,
    Button,
    Icon,
    Label
} from "semantic-ui-react";

const LandingPageComponent = () => {
    const [clickCount, setClickCount] = useState(0);
    const handlePageUpDownClick = (direction) => {
        direction === "down" ? setClickCount(clickCount + 1) : setClickCount(clickCount - 1);
    } 

    return (
        <Grid columns={1} style={{ 
            height: "100vh",
            overflow: "hidden"
        }}>
            <Grid.Row style={{ 
                transform: `translateY(calc(-100vh * ${clickCount}))`,
                transformStyle: "preserve-3d",
                transition: "all 1s"
            }}>
                <Grid.Column><FirstPage /></Grid.Column>
                <Grid.Column><SecondPage /></Grid.Column>
            </Grid.Row>
            <Grid.Row columns={16} style={{
                position: "fixed",
                right: 0,
                bottom: 0
            }}>
                <Grid.Column width={3} style={{
                    position: "absolute",
                    right: 0,
                    bottom: "8em"
                }}>
                    {clickCount === 0 &&
                        <Button 
                            onClick={() => handlePageUpDownClick("down")}
                            style={{
                                background: "#fff",
                                border: "2px solid rgba(0,0,0,.6)",
                                borderRadius: "50%",
                                boxShadow: "0px 1px 6px #00000069"
                            }}
                            icon
                        >
                            <Icon name="arrow down" />
                        </Button>
                    }
                    {clickCount !== 0 &&
                        <Button 
                            onClick={() => handlePageUpDownClick("up")}
                            style={{
                                background: "#fff",
                                border: "2px solid rgba(0,0,0,.6)",
                                borderRadius: "50%",
                                boxShadow: "0px 1px 6px #00000069"
                            }}
                            icon
                        >
                            <Icon name="arrow up" />
                        </Button>
                    }
                    &nbsp;
                    <Label 
                        as="a"
                        color="yellow"
                        tag
                    >
                        {clickCount === 0 ? content.SEE_MORE_LABEL : content.SIGN_UP_NOW}
                    </Label>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
};

export default LandingPageComponent;