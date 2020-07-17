import React from 'react';
import "./styles.scss";
import content from "./content";
import { 
    Grid, 
    Card, 
    Image 
} from "semantic-ui-react";
import Carousel from "semantic-ui-carousel-react";
import Icon from "../../../common/Icon";
import Button from "../../../common/Button";
import { NavLink } from "react-router-dom";

const SecondPage = () => {
    let elements = content.FEATURES_CARD_GROUP_ITEMS_ARRAY.map((SUB_ARRAY, i) => {
        return {
            render: () => 
                <Card.Group style={{ justifyContent: "space-evenly" }} key={i}>{                
                    SUB_ARRAY.map(({
                        image,
                        header,
                        description
                    }, i) =>             
                        <Card key={i}>
                            <Image src={`${process.env.PUBLIC_URL}/img/${image}.png`} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>{header}</Card.Header>
                                <Card.Description>{description}</Card.Description>
                            </Card.Content>
                        </Card>
                    )
                }</Card.Group>
        }
    });

    return (
        <div className="secondPageContainer">
            <div className="mainContainer">
                <div className="headerContainer">
                    <h3 className="header">{content.HEADER}</h3>
                    <h2 className="subHeader">{content.SUB_HEADER}</h2>
                </div>
                <Carousel 
                    elements={elements} 
                    animation="bounce"
                    showNextPrev={true}
                    showIndicators={true}
                />
            </div>
            <div className="footerContainer">
                <div className="footerColumnsContainer">
                    {content.FOOTER_LINKS_ARRAY.map(({
                        TITLE,
                        BUTTON_ARRAY
                    }, i) => 
                        <div className="footerColumn" key={i}>
                            <div className="columnTitle">{TITLE}</div>
                            {BUTTON_ARRAY.map(({
                                TEXT,
                                ICON,
                                LINK
                            }, i) => 
                                TEXT ? 
                                <NavLink to={LINK} className="columnLink" key={i}>
                                    {TEXT}
                                </NavLink> :
                                <div className="buttonContainer" key={i}>
                                    <Button 
                                        className="columnButton"
                                        iconName={ICON}
                                        isIcon
                                        cover
                                        disabled
                                    />
                                </div>
                            )}
                        </div>
                    )}
                    <div className="socialMediaLinksRow">
                        <div className="socialMediaLinksContainer">
                            {content.SOCIAL_MEDIA_LINKS_ARRAY.map((LINK, i) => 
                                <a className="linkContainer" key={i}>
                                    <Icon 
                                        className="socialMediaIcon"
                                        iconName={LINK}
                                    />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <div className="copyrightRow">{content.COPYRIGHT_TEXT}</div>
            </div>
        </div>
    );
};

export default SecondPage;