import React from 'react';
import "./styles.scss";
import content from "./content";
import {
	Image,
	Icon,
	Grid
} from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

const SidebarComponent = () => {
	return (
		<Grid.Column 
			style={{
				display: "flex",
				flexDirection: "column",
				height: "100%",
				padding: "0 1.5rem",
				background: "#93AFD6",
				color: "#fff",
				zIndex: "2000"
			}} 
			width={2}
		>
			<Image 
				src={`${process.env.PUBLIC_URL}/img/decompress_transparent.png`} 
				style={{
					margin: "2em auto 0 auto",
					width: "2em"
				}}
			/>
			{content.SIDEBAR_NAV_ARRAY.map(({
				name,
				url,
				icon
			}, i) => 
				<Grid.Row className="sideLinks" key={i}>
					<NavLink to={url} className="sidebarNavLinks">
						<Icon disabled name={icon} style={{ margin: "0 .25rem 0 0" }} />&nbsp;{name}
					</NavLink>
				</Grid.Row>
			)}
		</Grid.Column>
	);
};

export default SidebarComponent;