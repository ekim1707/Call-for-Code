import React, { useState } from 'react';
import content from "./content";
import {
    Grid, 
    Menu,
    Segment
} from "semantic-ui-react";

const EntryLogComponent = ({
    oldDateValue
}) => {
    const filteredTitlesArray = content.FAKE_DATA_ARRAY.map(({ TITLE }) => TITLE);
    const filteredEntriesArray = content.FAKE_DATA_ARRAY.map(({ ENTRY }, i) => `${i+1} ${ENTRY}`);
    const [activeItem, setActiveItem] = useState(0);
    const handleItemClick = (index) => {
        setActiveItem(index);
    }

    return (
        <Grid style={{ 
            margin: 0,
            padding: 0
        }}>
            <Grid.Column 
                style={{ 
                    height: "70vh",
                    paddingLeft: 0,
                    overflowY: "scroll"
                }} 
                width={4}
            >
                <Menu fluid vertical tabular>
                    {filteredTitlesArray.map((INDEX, i) =>             
                        <Menu.Item
                            name={INDEX}
                            active={activeItem === i}
                            onClick={() => handleItemClick(i)}
                            key={i}
                        />
                    )}
                </Menu>
            </Grid.Column>
            <Grid.Column style={{ paddingRight: 0 }} stretched width={12}>
            <Segment>
                {filteredEntriesArray[activeItem]}
            </Segment>
            </Grid.Column>
        </Grid>
    )
}

export default EntryLogComponent;