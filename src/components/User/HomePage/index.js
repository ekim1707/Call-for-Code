import React, { useState, useReducer } from 'react';
import "./styles.scss";
import content from "./content";
import userService from "./../../../services/userService";
import authenticationService from "./../../../services/authenticationService";
import {
	Grid,
	Header,
	Divider,
	Form,
	Segment
} from "semantic-ui-react";

const UserHomePage = () => {

	userService.getUserById(authenticationService.getDecodedJwt().jti)
		.then(response => console.log(response))
	// return (
	// <div className = "userBodyContainer" >
	// 	<div class="ui message">
	// 		<div class="content">
	// 			<div class="header">Changes in Service</div>
	// 				<p>
	// 					We updated our privacy policy here to better service our customers. We recommend reviewing the
	// 					changes.
	// 				</p>
	// 		</div>
	// 	</div>
	// </ div>

	// console.log(authenticationService.getDecodedJwt().jti)
	// userService.getUserById(authenticationService.getDecodedJwt().jti)
	// 	.then(response => console.log(response))
	const [formData, setFormData] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            email: "User@gmail.com",
            name: "User",
						password: "password",
						newsletter: true,
						surveys: true
        }
	);
	const {
		email,
		name,
		password,
		newsletter,
		surveys
	} = formData;
	const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
	};
	
	const [newsletterIsOn, setNewsletterIsOn] = useState(true);
	const [surveysIsOn, setSurveysIsOn] = useState(true);
	const handleInputClick = (index) => {
		if (index === 0) {
			setFormData({ ...formData, newsletter: !newsletterIsOn });
			setNewsletterIsOn(!newsletterIsOn);
		} else {
			setFormData({ ...formData, surveys: !surveysIsOn });
			setSurveysIsOn(!surveysIsOn);
		}
	}

	return (
		<Grid.Column className="homePageContainer" style={{ padding: "0 30px" }} width={14}>
			<Header style={{
                width: "90%",
                margin: "2rem 0",
                color: "#93AFD6",
                fontSize: "6vh",
                textAlign: "left"
            }}>
				{content.TITLE}
			</Header>
            <Divider style={{ borderTop: "3px solid rgba(34,36,38,.15)" }} />
			<Form size='large'>
				<Segment stacked>
					<Header>{content.HEADER1}</Header>
					<Form.Input 
						onChange={(e) => handleInputChange(e)} 
						fluid 
						icon='user' 
						iconPosition='left' 
						placeholder='email address' 
						value={email}
						disabled
					/>
					<Form.Input 
						onChange={(e) => handleInputChange(e)}
						fluid 
						icon='user'
						iconPosition='left'
						placeholder='Name'
						value={name}
						disabled
					/>
					<Form.Input
						onChange={(e) => handleInputChange(e)}
						fluid
						icon='lock'
						iconPosition='left'
						placeholder='Password'
						type='password'
						value={password}
						disabled
					/>
					<Header style={{ margin: "1rem 0" }}>{content.HEADER2}</Header>
					<Segment style={{ 
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						opacity: newsletterIsOn ? 1 : .45,
						transition: "1s"
					}}>
						{content.COMMUNICATIONS1}
						<div 
							onClick={(e) => {setNewsletterIsOn(!newsletterIsOn); handleInputClick(0)}}
							className="toggleButton"
						>
							<div className={newsletterIsOn ? "toggleCircleLeft" : "toggleCircleRight"}></div>
						</div>
					</Segment>
					<Segment style={{ 
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						opacity: surveysIsOn ? 1 : .45,
						transition: "1s"
					}}>
						{content.COMMUNICATIONS2}
						<div 
							onClick={(e) => {setSurveysIsOn(!surveysIsOn); handleInputClick(1)}}
							className="toggleButton"
						>
							<div className={surveysIsOn ? "toggleCircleLeft" : "toggleCircleRight"}></div>
						</div>
					</Segment>
				</Segment>
			</Form>
		</Grid.Column>
	);
}

export default UserHomePage;