import React from 'react';
import "./styles.scss";
import content from "./content";
import {
	Image,
	Icon,
	Grid,
} from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

const SidebarComponent = () => {
	return (
		<Grid.Column 
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				height: "100%",
				background: "#93AFD6",
				color: "#fff"
			}} 
			width={2}
		>
			< Image src={
				process.env.PUBLIC_URL + '/img/logo.reshape.svg'
			} style={{
				marginTop: "2em",
				width: "4em"
			}}
			/>
			{content.SIDEBAR_NAV_ARRAY.map(({
				name,
				icon,
				url
			}, i) => 
				<Grid.Row style={{ 
					marginTop: "4.5vh"
				}}>
					<NavLink to={url} className="sidebarNavLinks">
						<Icon disabled name={icon} />
						<span className="dynamicPathname">{name}</span>
					</NavLink>
				</Grid.Row>
			)}
		</Grid.Column>
	);
};

export default SidebarComponent;