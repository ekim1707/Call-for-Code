import React from 'react';
import content from "./content";
import userService from "./../../../services/userService";
import authenticationService from "./../../../services/authenticationService";
import {
	Grid,
	Header,
	Divider
} from "semantic-ui-react";

const UserHomePage = () => {
	// console.log(authenticationService.getDecodedJwt().jti)
	// userService.getUserById(authenticationService.getDecodedJwt().jti)
	// 	.then(response => console.log(response))
	return (
		<Grid.Column style={{ padding: "0 30px" }} width={14}>
			<Header style={{
                width: "90%",
                margin: "2rem 0",
                color: "#93AFD6",
                fontSize: "6vh",
                textAlign: "left"
            }}>{content.TITLE}</Header>
            <Divider style={{ borderTop: "3px solid rgba(34,36,38,.15)" }} />
		</Grid.Column>
	);
}

export default UserHomePage;