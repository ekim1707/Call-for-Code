import React, { useState } from 'react';
import content from "./content";
import { 
    Grid,
    Card,
    Image
} from 'semantic-ui-react';
import EmbedSelectPage from "./EmbedSelectPage";

const DestressComponent = () => {
    const [isSelected, setIsSelected] = useState(false);
    return (
        <Grid.Column style={{ padding: "40px" }} width={14}>
            {!isSelected && (
                <Card.Group style={{ justifyContent: "space-evenly" }}>{                
                    content.CARD_ARRAY.map(({
                        IMAGE,
                        TITLE
                    }, i) =>             
                        <Card key={i}>
                            <Image src={IMAGE} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>{TITLE}</Card.Header>
                            </Card.Content>
                        </Card>
                    )
                }</Card.Group>
            )}
        </Grid.Column>
    )
};

export default DestressComponent;