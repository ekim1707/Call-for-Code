import React from 'react';
import content from "./content";
import {
    Grid,
    Header,
    Card
} from 'semantic-ui-react';

const CoursesComponent = () => {
    return (
        <Grid centered>
            <Header style={{
                width: "90%",
                margin: "2rem 0",
                color: "#fff",
                fontSize: "6vh",
                textAlign: "left"
            }}>{content.TITLE}</Header>
            <Grid.Column width={15}>
                <Card.Group 
                    items={content.COURSES_CARD_GROUP_ITEMS_ARRAY} 
                    itemsPerRow={3} 
                />
            </Grid.Column>
        </Grid>
    )
};

export default CoursesComponent;