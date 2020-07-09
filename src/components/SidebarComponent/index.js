import React from 'react';
import "./styles.scss";
import content from "./content";
import {
	Image,
	Icon
} from 'semantic-ui-react'
import { Link } from "react-router-dom";

const SidebarComponent = () => {
	return (
		<div className="ui sidebar inverted vertical menu visible userSideBar">
			< Image src={
				process.env.PUBLIC_URL + '/img/logo192.png'
			} className="logoImageOnUserSideBar"
			/>
			<div className="linksSideBar" >
				{content.SIDEBAR_NAV_ARRAY.map((index, i) => {
					return <div>
						<Link to={index.url} className="sidebarNavLinks" key={i}>
							<Icon disabled name={index.icon} /> {index.name}
						</Link>
						<br/>
					</div>
				})}
			</div>
		</div>);
};

export default SidebarComponent;