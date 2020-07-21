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
            }}>{content.TITLE}</Header>
            <Divider style={{ borderTop: "3px solid rgba(34,36,38,.15)" }} />
            <Card.Group style={{ height: "72vh", overflowY: "scroll" }} itemsPerRow={3}>
                {content.NEWS_LINKS_ARRAY.map(({
                    IMAGE,
                    TITLE,
                    KEY_WORDS_ARRAY
                }, i) => 
                    <Card key={i}>
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
                            <Header as="h1">{TITLE}</Header>
                            Article goes here
                        </Modal>
                        <Card.Description style={{ padding: "0 21px 10px 21px"}}>
                            <strong>{content.KEY_WORDS_LABEL}</strong>
                            {KEY_WORDS_ARRAY.map((WORD, i) => (i + 1 === KEY_WORDS_ARRAY.length ? WORD : `${WORD}, `))}
                        </Card.Description>
                    </Card>
                )}
            </Card.Group>
        </Grid.Column>
    )
};

export default NewsComponent;