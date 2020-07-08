import React from 'react';
import "./styles.scss";
import content from "./content";
import Icon from "../../../common/Icon";
import Button from "../../../common/Button";
import { Link } from "react-router-dom";

const SecondPage = () => {

    let carouselButtonArray = [];
    for (let x = 0; x < Math.ceil(content.BODY_DIVS_ARRAY.length/3); x++) {
        carouselButtonArray.push(<Button className="carouselButton" key={x} />)
    };

    return (
        <div className="secondPageContainer">
            <div className="mainContainer">
                <div className="headerContainer">
                    <h3 className="header">{content.HEADER}</h3>
                    <h2 className="subHeader">{content.SUB_HEADER}</h2>
                </div>
                {/* functional carousel to come */}
                <div className="contentContainer">
                    {content.BODY_DIVS_ARRAY.map((DIV, i) => 
                        <div className="contentSubContainer" key={i}>
                            <div className="iconContainer"><Icon className="bodyContentIcon" iconName={DIV.toLowerCase()} /></div>
                            <h4>{DIV}</h4>
                            <p>{content.READ_MORE}</p>
                            {/* where does this "Read more" link lead to? */}
                        </div>
                    )}
                </div>
                <div className="carouselButtonContainer">
                    {carouselButtonArray.map(button => button)}
                </div>
            </div>
            <div className="footerContainer">
                <div className="footerColumnsContainer">
                    {content.FOOTER_LINKS_ARRAY.map((INDEX, i) => 
                        <div className="footerColumn" key={i}>
                            <div className="columnTitle">{INDEX.TITLE}</div>
                            {INDEX.BUTTON_ARRAY.map(BUTTON => 
                                BUTTON.TEXT ? 
                                <Link to={BUTTON.TEXT.toLowerCase()} className="columnLink">{BUTTON.TEXT}</Link> :
                                <div className="buttonContainer">
                                    <Button 
                                        className="columnButton"
                                        iconName={BUTTON.ICON}
                                        isIcon
                                    />
                                </div>
                            )}
                        </div>
                    )}
                    <div className="socialMediaButtonRow">
                        <div className="buttonContainer">
                            {content.SOCIAL_MEDIA_BUTTONS_ARRAY.map((button, i) => 
                                <Button 
                                    className="socialMediaButton"
                                    iconName={button}
                                    isIcon
                                    key={i}
                                />
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