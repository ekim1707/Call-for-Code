import React from 'react';
import content from "./content";
import {
    Header,
    Card,
    Image,
    Button,
    Modal,
    Embed
} from 'semantic-ui-react';

const EmbedSelectPage = ({
    isSelected
}) => {
    return (
        <Card.Group centered itemsPerRow={3} style={{ 
            height: "55vh", 
            marginTop: "1em",
            paddingBottom: "1em",
            overflowY: "scroll" 
        }}>
            {content.EMBED_SELECT_PAGE_ARRAY[isSelected - 1].map(({
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
    )
}

export default EmbedSelectPage;