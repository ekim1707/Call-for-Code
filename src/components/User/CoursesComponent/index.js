import React from 'react';
import content from "./content";
import {
    Grid,
    Header,
    Divider,
    Card,
    Image,
    Button,
    Modal,
    Embed,
    Popup
} from 'semantic-ui-react';

const CoursesComponent = () => {
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
            <Card.Group itemsPerRow={3}>
                {content.COURSES_CARD_GROUP_ITEMS_ARRAY.map(({
                    image,
                    header,
                    embed,
                    button_text,
                    popup_content
                }, i) => 
                    <Card key={i}>
                        <Modal trigger={
                            <Button style={{ 
                                margin: 0,
                                padding: 0,
                                background: "transparent"
                            }} >
                                <Image src={image} />
                                <Card.Content style={{ padding: "1em 1em 0 1em" }}>
                                    <Card.Header style={{ textAlign: "left" }}>
                                        {header}
                                    </Card.Header>
                                    <Divider/>
                                </Card.Content>
                            </Button>
                        }>
                            <Embed 
                                id={embed}
                                placeholder={image}
                                source="youtube"
                            />
                            <Header as="h1">{header}</Header>
                        </Modal>
                        <Card.Content style={{ 
                            padding: "0 1em 1em 1em",
                            borderTop: "none" 
                        }}>
                            <Popup 
                                trigger={
                                    <Card.Description style={{ cursor: "pointer" }}>
                                        {button_text}
                                    </Card.Description>
                                }
                                content={popup_content}
                                position="bottom left"
                                basic
                            />
                        </Card.Content>
                    </Card>
                )}
            </Card.Group>
        </Grid.Column>
    )
};

export default CoursesComponent;