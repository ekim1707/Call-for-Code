import React from 'react';
import "./styles.scss";
import content from "./content";
import {
	Button
} from 'semantic-ui-react';
import { Link } from "react-router-dom";

const FirstPage = () => {
	return (
		<div className="firstPageContainer" >
			<div className="headerContainer">
				< h1 className = "title topMarginContainers leftMargin appNameFontFamily appNameFontSize"
				style = {
						{
							'color': '#1C2C5B'
}} > {
					content.TITLE
				} </ h1>
				<ul className="navLinkContainer topMarginContainers">
					{content.NAV_ARRAY.map((index, i) => {
						return <Link to = {
							index.url.toLowerCase()
						}
						className = "navLinks buttonHeight"
						style = {
							i + 1 === content.NAV_ARRAY.length ? { border: "2px solid white", borderRadius: "20px", paddingRight:'1.5em', paddingLeft: '1.5em' } : {}
						} key={i}>{index.name}</Link>;
					})}
				</ul>
			</div>
			<h1 className="bodyContainer leftMargin" style={{ 'fontFamily': 'Fredoka One', 'fontSize': '7vh' }}>
				{content.BODY}
			</h1>
			< h2 className = "messageContainer"
			style = {
					{
						'marginTop': '0',
						'color': '#F2F0D8'}} >{content.MESSAGE}</h2>
			< div >
				< Button className = "gettingStartedButton" > Get started </ Button>
			</div>
			{/* <div className="footerContainer">				
				<h1 className="footerHeader">
					<span className="lightYellowBox">{content.SPACEHOLDER}</span>
					<span className="darkYellowBox">{content.SPACEHOLDER}</span>
					{content.FOOTER_HEADER}
				</ h1>
				<div className="footerMessage">
					{content.FOOTER_MESSAGE}
					<div className="shorterWidthTextUnderline"></div>
				</div>
			</div> */}
		</div>
	);
};

export default FirstPage;