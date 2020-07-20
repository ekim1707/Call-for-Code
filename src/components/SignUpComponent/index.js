import React from 'react';
import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Message,
    Segment
} from 'semantic-ui-react';
import authenticationService from '../../services/authenticationService';
import resources from '../../environments/resources';

class SignUpComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: ''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

	handlePasswordChange(event) {
		this.setState({password: event.target.value});
	}
	
	handleNameChange(event) {
		this.setState({name: event.target.value});
	}

    async handleSubmit(event) {
        event.preventDefault();
		const signUpResponse = await authenticationService.signUp(resources.authenticationResources.registerResource, this.state);
		const loginResponse = await authenticationService.logIn(resources.authenticationResources.authenticateResource, {
			email: this.state.email,
			password: this.state.password
		})
    }

    render() {
        return (
            < Grid textAlign = 'center'
            className = "blueBackgroundColor"
            style = {
                {
                    height: '100vh'
                }
            }
            verticalAlign = 'middle' >
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='blue' textAlign='center'>
                        < Image src={
                            process.env.PUBLIC_URL + '/img/tobeusedLogo.png'
                        }
                            style={
                                {
                                    width: '10px'
                                }
                            }
                        /> &nbsp; Bring more possitive to your life
                    </Header>
                    <Form size='large' onSubmit={this.handleSubmit} >
                        <Segment stacked>
                            < Form.Input fluid icon='user' iconPosition='left' placeholder='email address' 
							value = {
                                this.state.email
                            }
                            onChange = {
                                this.handleEmailChange
                            } />
                            < Form.Input fluid icon='user'
                                iconPosition='left'
                                placeholder='Name'
								value = {
                                    this.state.name
                                }
                                onChange = {
                                    this.handleNameChange
                                }
							 />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                value = {
                                    this.state.password
                                }
                                onChange = {
                                    this.handlePasswordChange
                                }
                            />
                            < Button color = 'blue'
                            fluid size = 'large'
                            className = "roundBorderRadious" >
                                Sign up
                            </Button>
                        </Segment>
                    </Form>
                    < Message className = "boldFontWeight" >
                        Already have an account?  <a href='login'>Log in</a>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default SignUpComponent;