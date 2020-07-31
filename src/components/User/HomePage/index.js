import React, { Component } from 'react';
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

class UserHomePage extends Component {
	state = {
		email: "",
		name: "",
		newsletter: true,
		survey: true
	};

	componentDidMount() {
		userService.getUserById(authenticationService.getDecodedJwt().jti)
		.then(response => {
			const {
				email,
				name
			} = response.data
			this.setState({
				email: email,
				name: name
			})
		});
	}

	handleEmailChange = (e) => {
		this.setState({
			email: e.target.value
		})
	}
	handleNameChange = (e) => {
		this.setState({
			name: e.target.value
		})
	}
	handleNewsletterClick = (boolean) => {
		this.setState({
			newsletter: boolean
		})
	}
	handleSurveyClick = (boolean) => {
		this.setState({
			survey: boolean
		})
	}

	render() {
		const {
			email,
			name,
			newsletter,
			survey,
		} = this.state;
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
							onChange={(e) => this.handleEmailChange(e)} 
							fluid 
							icon='user' 
							iconPosition='left' 
							placeholder='email address' 
							value={email}
						/>
						<Form.Input 
							onChange={(e) => this.handleNameChange(e)}
							fluid 
							icon='user'
							iconPosition='left'
							placeholder='Name'
							value={name}
						/>
						<Header style={{ margin: "1rem 0" }}>{content.HEADER2}</Header>
						<Segment style={{ 
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							opacity: newsletter ? 1 : .45,
							transition: "1s"
						}}>
							{content.COMMUNICATIONS1}
							<div 
								onClick={() => this.handleNewsletterClick(!newsletter)}
								className="toggleButton"
							>
								<div className={newsletter ? "toggleCircleLeft" : "toggleCircleRight"}></div>
							</div>
						</Segment>
						<Segment style={{ 
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							opacity: survey ? 1 : .45,
							transition: "1s"
						}}>
							{content.COMMUNICATIONS2}
							<div 
								onClick={(e) => this.handleSurveyClick(!survey)}
								className="toggleButton"
							>
								<div className={survey ? "toggleCircleLeft" : "toggleCircleRight"}></div>
							</div>
						</Segment>
					</Segment>
				</Form>
			</Grid.Column>
		);
	}
}

export default UserHomePage;