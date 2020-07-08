import React from 'react';
import "./styles.scss";
import content from "./content";
import Header from "../../HeaderComponent";
import { Link } from "react-router-dom";

const FirstPage = () => {
	return (
		<div className="firstPageContainer" >
			<div className="headerContainer">
				<div className="titleContainer">
					<h1 className="title topMarginContainers leftMargin" style={{ 'fontFamily': 'Kaushan Script', 'fontSize': '8vh' }}>{content.TITLE}</h1>
					<ul className="navLinkContainer topMarginContainers">
						{content.NAV_ARRAY.map((index, i) => {
							return <Link to={index.url.toLowerCase()} className="navLinks" style={
								i + 1 === content.NAV_ARRAY.length ? { border: "2px solid white", borderRadius: "20px" } : {}
							} key={i}>{index.name}</Link>;
						})}
					</ul>
				</div>
			</div>
			<h1 className="bodyContainer leftMargin" style={{ 'fontFamily': 'Fredoka One', 'fontSize': '7vh' }}>
				{content.BODY}
			</h1>
			<h2 className="messageContainer" >{content.MESSAGE}</h2>
			<div className="footerContainer">				
				<h1 className="footerHeader">
					<span className="lightYellowBox">{content.SPACEHOLDER}</span>
					<span className="darkYellowBox">{content.SPACEHOLDER}</span>
					{content.FOOTER_HEADER}
				</h1>
				<p className="footerMessage">
					{content.FOOTER_MESSAGE}
					<div className="shorterWidthTextUnderline"></div>
				</p>
			</div>
		</div>
	);
};

export default FirstPage;