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
				alignItems: "center",
				height: "100%",
				background: "#93AFD6",
				padding: 0,
				color: "#fff",
				zIndex: "2000"
			}} 
			width={2}
		>
			<Image 
				src={`${process.env.PUBLIC_URL}/img/decompress_transparent.png`} 
				style={{
					margin: "3em auto 0 auto",
					width: "1.5em"
				}}
			/>
			<div className="contentOfSideBar"> 
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
			</div>
		</Grid.Column>
	);
};

export default SidebarComponent;