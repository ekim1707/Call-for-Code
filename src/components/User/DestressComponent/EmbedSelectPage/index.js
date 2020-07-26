import React from 'react';
import content from "./content";
import {
    Header,
    Divider,
    Card,
    Image,
    Button,
    Modal,
    Embed
} from 'semantic-ui-react';

const EmbedSelectPage = () => {
    return (
        <React.Fragment>
            <Header style={{
                width: "90%",
                margin: "2rem 0",
                color: "#93AFD6",
                fontSize: "6vh",
                textAlign: "left"
            }}>{content.TITLE}</Header>
            <Divider style={{ borderTop: "3px solid rgba(34,36,38,.15)" }} />
            <Card.Group centered itemsPerRow={3} style={{ 
                height: "70vh", 
                paddingBottom: "20px",
                overflowY: "scroll" 
            }}>
                {content.CARD_ARRAY.map(({
                    TITLE,
                    EMBED
                }, i) => 
                    <Card key={i}>
                        <Modal trigger={
                            <Button style={{ 
                                margin: 0,
                                padding: 0,
                                background: "transparent"
                            }} >
                                <Image src={`${process.env.PUBLIC_URL}/img/play_video.png`} />
                            </Button>
                        }>
                            <Embed 
                                id={EMBED}
                                placeholder=""
                                source="youtube"
                            />
                            <Header as="h1">{TITLE}</Header>
                        </Modal>
                        <Card.Content>
                            <Card.Header>
                                {TITLE}
                            </Card.Header>
                        </Card.Content>
                    </Card>
                )}
            </Card.Group>
        </React.Fragment>
    )
}

export default EmbedSelectPage;