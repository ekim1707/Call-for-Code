import React from 'react';
import authenticationService from '../../services/authenticationService';
import resources from '../../environments/resources';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        authenticationService.logIn(resources.authenticationResources.authenticateResource, this.state);
    }

    render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    < Header as = 'h2'
                    color = 'blue'
                    textAlign = 'center' >
                    < Image src = {
                        process.env.PUBLIC_URL + '/img/tobeusedLogo.png'
                    }
                    style={{ width: '10px' }}
                    /> &nbsp; Log in to your account
                    </Header>
                    <Form size='large' onSubmit={this.handleSubmit} >
                        <Segment stacked>
                            < Form.Input fluid icon = 'user'
                            iconPosition = 'left'
                            placeholder = 'email address'
                            value = {
                                this.state.email
                            }
                            onChange = {
                                this.handleEmailChange
                            }
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type = 'password'
                                value = {
                                    this.state.password
                                }
                                onChange = {
                                    this.handlePasswordChange
                                }
                            />
                            <Button color='blue' fluid size='large'>
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Decompress? <a href='signup'>Sign Up</a>
                    </Message>
                </Grid.Column>
            </Grid>
        );
    }
}

export default LoginComponent;