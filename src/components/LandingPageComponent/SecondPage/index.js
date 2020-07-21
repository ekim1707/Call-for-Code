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
import {
    Image,
} from 'semantic-ui-react'
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
                    < h2 className = "header leftMarginSecondPage exploreSizeSecondPage" > {
                        content.HEADER
                    } </ h2>
                    < h1 className = "subHeader leftMarginSecondPage fontSizeSecondPage" > {
                        content.SUB_HEADER
                    } </ h1>
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
                    <div className="footerColumn"> 
                            < div className = "columnTitle" > Get the app </ div>
                            < Image src = {
                                process.env.PUBLIC_URL + '/img/logo.reshape.svg'
                            } />
                    </div>
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