import React from 'react';
import content from "./content";
import { 
    Grid, 
    Header,
    Divider,
    Card, 
    Image,
    Button,
    Modal 
} from "semantic-ui-react";

const NewsComponent = () => {
    return (
        <Grid.Column style={{ padding: "0 30px" }} width={14}>
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
            <Card.Group centered itemsPerRow={3} style={{ 
                height: "70vh", 
                paddingBottom: "20px",
                overflowY: "scroll" 
            }}>
                {content.NEWS_LINKS_ARRAY.map(({
                    IMAGE,
                    TITLE,
                    LINK
                }, i) => 
                    <Card key={i}>
                        <a href={LINK} target="_blank" rel="noopener noreferrer">
                            <Image src={IMAGE} />
                            <Modal trigger={
                                <Button style={{ 
                                    background: "transparent",
                                    color: "#000",
                                    textAlign: "left"
                                }} >
                                    {TITLE}
                                </Button>
                            }>
                            </Modal>
                        </a>
                    </Card>
                )}
            </Card.Group>
        </Grid.Column>
    )
};

export default NewsComponent;