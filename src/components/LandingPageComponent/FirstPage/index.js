import React from 'react';
import "./styles.scss";
import content from "./content";
import Icon from "../../../common/Icon";
import { Link } from "react-router-dom";

const FirstPage = () => {
	return (
		<div className="firstPageContainer" >
			<div className="headerContainer">
				<div className="titleContainer">
					<h1 className="title topMarginContainers" style={{ 'fontFamily': 'Kaushan Script', 'fontSize': '8vh' }}>{content.TITLE}</h1>
					<ul className="navLinkContainer topMarginContainers">
						{content.NAV_ARRAY.map((index, i) => {
							return <Link to={index.url.toLowerCase()} className="navLinks" style={
								i + 1 === content.NAV_ARRAY.length ? { border: "1px solid white" } : {}
							} key={i}>{index.name}</Link>;
						})}
					</ul>
				</div>
			</div>
			<h1 className="bodyContainer">
				{content.BODY}
			</h1>
		</div>
	);
};

export default FirstPage;