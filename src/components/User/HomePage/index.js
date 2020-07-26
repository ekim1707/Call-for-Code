import React from 'react';
import "./styles.scss";
import userService from "./../../../services/userService";
import authenticationService from "./../../../services/authenticationService";

const UserHomePage = () => {
	console.log(authenticationService.getDecodedJwt().jti)
	userService.getUserById(authenticationService.getDecodedJwt().jti)
		.then(response => console.log(response))
	return (
	<div className = "userBodyContainer" >
		<h1> Home coming soon </ h1>
	</ div>
	);
}

export default UserHomePage;