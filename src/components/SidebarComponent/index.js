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
				url,
				iconUrl
			}, i) => 
				<Grid.Row style={{ 
					marginTop: "2.5vh"
				}}>
					<div className="sideLinks" >
												< NavLink to = {
													url
												}
												className = "sidebarNavLinks" >
													<div className = "cellSideBar" >
														<Image src = {
														process.env.PUBLIC_URL + "img/" + iconUrl
														}
														style = {
															{
																width: "1em"
															}
														}
														/> &nbsp; &nbsp; 
														<span className = "dynamicPathname" >{name} </ span> 
													</ div>
													</ NavLink>
					</div>
				</Grid.Row>
			)}
		</Grid.Column>
	);
};

export default SidebarComponent;