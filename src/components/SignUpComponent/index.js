import React from 'react';
import content from "./content";
import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Message,
    Segment
} from 'semantic-ui-react';
import resources from '../../environments/resources';
import authenticationService from '../../services/authenticationService';

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
		const signUpResponse=await authenticationService.signUp(resources.authenticationResources.registerResource, this.state);
		const loginResponse=await authenticationService.logIn(resources.authenticationResources.authenticateResource, {
			email: this.state.email,
			password: this.state.password
		})
    }

    render() {
        return (
            <Grid 
                className="blueBackgroundColor"
                verticalAlign='middle' 
                textAlign='center'
                style={{ height: '100vh' }}
            >
                <Grid.Column style={{ maxWidth: 600 }}>
                    <Header 
                        as='h2' 
                        color='blue' 
                        className = "displayFlex centeredJustifiedContent" 
                        textAlign='center'
                        style={{
                            alignItems: "center"
                        }}
                    >
                        <Image 
                            src={`${process.env.PUBLIC_URL}/img/decompress_transparent.png`}
                            style={{
                                width: 'initial',
                                height: "2em",
                                marginRight: "1em"
                            }}
                        />
                        &nbsp;
                        <div className="blackFont">{content.HEADER}</div>
                    </Header>
                    <Form size='large' onSubmit={this.handleSubmit}>
                        <Segment stacked>
                            <Form.Input 
                                onChange={this.handleEmailChange} 
                                fluid 
                                icon='user'
                                label='Email'
                                iconPosition='left' 
                                placeholder='email address' 
                                value={this.state.email}
                            />
                            <Form.Input 
                                fluid
                                icon='user'
                                onChange={this.handleNameChange}
                                iconPosition='left'
                                placeholder='Name'
                                label="Name"
								value={this.state.name}
							/>
                            <Form.Input
                                onChange={this.handlePasswordChange}
                                fluid
                                icon='lock'
                                label="Password"
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                value={this.state.password}
                            />
                            {(() => {
                                if (this.state.email.length === 0 || this.state.name === 0 || this.state.password === 0) {
                                    return (
                                        <Button 
                                            className="roundBorderRadious" 
                                            color='blue'
                                            fluid 
                                            size='large'
                                            disabled
                                        >
                                            {content.SIGN_UP}
                                        </Button>
                                    ); 
                                } else {
                                    return (
                                        <Button 
                                            className="roundBorderRadious"
                                            color='blue'
                                            fluid 
                                            size='large'
                                            >
                                            {content.SIGN_UP}
                                        </Button>
                                    );
                                }
                            })()}
                        </Segment>
                    </Form>
                    <Message className="boldFontWeight roundBorderRadious" style={{
                        fontSize: "1.3em",
                        fontWeight: "bold",
                        color: "#5C5F64",
                        backgroundColor: '#ECF1FF'
                    }}>
                        {content.ALREADY}
                        &nbsp;
                        <a 
                            href='login' 
                            style={{
                                textDecoration: 'underline',
                                color: '#2b7fed'
                            }}
                        >
                            {content.LOGIN}
                        </a>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default SignUpComponent;