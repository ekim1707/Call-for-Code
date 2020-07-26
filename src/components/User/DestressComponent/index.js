import React, { useState } from 'react';
import content from "./content";
import { 
    Grid,
    Card,
    Image,
    Header,
    Divider,
    Button,
    Icon
} from 'semantic-ui-react';
import EmbedCardGroup from "./EmbedCardGroup";

const DestressComponent = () => {
    const [isSelected, setIsSelected] = useState(0);
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
            {isSelected === 0 && (
                <Card.Group style={{ justifyContent: "space-evenly" }}>{                
                    content.CARD_ARRAY.map(({
                        IMAGE,
                        TITLE
                    }, i) =>             
                        <Card 
                            onClick={() => setIsSelected(i + 1)}
                            style={{
                                borderRadius: "25px",
                                overflow: "hidden"
                            }} 
                            key={i}
                        >
                            <Image src={IMAGE} wrapped ui={false} />
                            <Card.Content style={{ background: "#ebf5f9" }}>
                                <Card.Header style={{ textAlign: "center" }}>{TITLE}</Card.Header>
                            </Card.Content>
                        </Card>
                    )
                }</Card.Group>
            )}
            {isSelected > 0 && (
                <React.Fragment>
                    <Button 
                        onClick={() => setIsSelected(0)}
                        icon
                    >
                        <Icon name='arrow left' />
                    </Button>
                    <EmbedCardGroup 
                        isSelected={isSelected} 
                        setIsSelected={setIsSelected}
                    />
                </React.Fragment>
            )}
        </Grid.Column>
    )
};

export default DestressComponent;