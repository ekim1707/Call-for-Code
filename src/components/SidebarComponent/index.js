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
		<React.Fragment>
			<Grid.Row columns={1}>
				<Grid.Column>
					< Image src={
						process.env.PUBLIC_URL + '/img/logo.reshape.svg'
					} className="logoImageOnUserSideBar"
					/>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row columns={1}>
				<Grid.Column style={{ paddingLeft: "15%" }}>
					{content.SIDEBAR_NAV_ARRAY.map(({
						name,
						icon,
						url
					}, i) => 
						<Grid.Row style={{ marginTop: "4.5vh" }}>
							<NavLink to={url} className="sidebarNavLinks">
								<Icon disabled name={icon} />
								<span className="dynamicPathname">{name}</span>
							</NavLink>
						</Grid.Row>
					)}
				</Grid.Column>
			</Grid.Row>
		</React.Fragment>
	);
};

export default SidebarComponent;