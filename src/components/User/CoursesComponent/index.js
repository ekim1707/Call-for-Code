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
    Embed
} from 'semantic-ui-react';

const CoursesComponent = () => {
    return (
        <Grid.Column style={{ padding: "0 40px" }} width={14}>
            <Header style={{
                width: "90%",
                margin: "2rem 0",
                color: "#93AFD6",
                fontSize: "6vh",
                textAlign: "left"
            }}>{content.TITLE}</Header>
            <Divider style={{ borderTop: "3px solid rgba(34,36,38,.15)" }} />
            <Card.Group itemsPerRow={3}>
                {content.COURSES_CARD_GROUP_ITEMS_ARRAY.map(({
                    image,
                    header,
                    description
                }, i) => 
                    <Card key={i}>
                        <Image src={image} />
                        <Modal trigger={
                            <Button style={{ 
                                background: "transparent",
                                color: "#000",
                                textAlign: "left"
                            }} >
                                {header}
                            </Button>
                        }>
                            <Embed 
                                placeholder={image}
                                source="youtube"
                            />
                            <Header as="h1">{header}</Header>
                        </Modal>
                        <Card.Description style={{ padding: "0 21px 10px 21px"}}>
                            {description}
                        </Card.Description>
                    </Card>
                )}
            </Card.Group>
        </Grid.Column>
    )
};

export default CoursesComponent;