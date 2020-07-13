import React from 'react';
import "./styles.scss";
import content from "./content";
import SidebarContainer from "../../containers/SidebarContainer";
import Icon from "../../common/Icon";

const NewsComponent = () => {
    return (
        <div className="newsComponent">
            <ul className="newsLinksList">
                {content.NEWS_LINKS_ARRAY.map(LINK => 
                    <li className="newsLinkContainer">
                        <div className="newsLinkIconContainer"><Icon className="newsLinkIcon" iconName="book" /></div>
                        <h3 className="newsLinkTitle">{LINK.TITLE}</h3>
                        <div className="newsLinkKeyWordsContainer">
                            <b>{content.KEY_WORDS_LABEL}</b>
                            {LINK.KEY_WORDS.map((WORD, i) => (i + 1 === LINK.KEY_WORDS.length ? WORD : `${WORD}, `))}
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
};

export default NewsComponent;