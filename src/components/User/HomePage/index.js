import React from 'react';
import "./styles.scss";
import userService from "./../../../services/userService";
import authenticationService from "./../../../services/authenticationService";

const UserHomePage = () => {
	const name = "Diego";
	userService.getUserById(authenticationService.getDecodedJwt().jti)
		.then(response => console.log(response))
	return (
	<div className = "userBodyContainer" >
		<div class="ui message">
			<div class="content">
				<div class="header">Changes in Service</div>
					<p>
						We updated our privacy policy here to better service our customers. We recommend reviewing the
						changes.
					</p>
			</div>
		</div>
	</ div>
	);
}

export default UserHomePage;