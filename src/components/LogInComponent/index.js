import React from 'react';
import content from "./content";
import authenticationService from '../../services/authenticationService';
import resources from '../../environments/resources';
import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Message,
    Segment
} from 'semantic-ui-react';

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
        return ( <
            Grid textAlign = 'center'
            style = {
                {
                    height: '100vh'
                }
            }
            className = "blueBackgroundColor"
            verticalAlign = 'middle' >
            < Grid.Column style = {
                {
                    maxWidth: 600,
                }
            } >
            <Header as = 'h2'
            color = 'blue'
            className = "displayFlex centeredJustifiedContent"
            textAlign = 'center' >
            <
            Image src = {
                `${process.env.PUBLIC_URL}/img/logo.reshape.svg`
            }
            
            style = {
                {
                    width: '2em',
                    color: 'white'
                }
            }
            /> &nbsp; 
            <div className = "blackFont" style={{marginTop: "1%"}} > 
            
             < h1 > Log in to your account </ h1> </ div >
                </ Header >
                    <Form size = 'large' onSubmit = {this.handleSubmit} >
                        <Segment stacked >
                            <Form.Input fluid icon = 'mail'
                            iconPosition = 'left'
                            label="email"
                            placeholder = 'email address'
                            value = {
                                this.state.email
                            }
                            onChange = {
                                this.handleEmailChange
                            }
                            /> 
                        <Form.Input fluid icon = 'lock'
                            iconPosition = 'left'
                            placeholder = 'Password'
                            label="password"
                            type = 'password'
                            value = {
                                this.state.password
                            }
                            onChange = {
                                this.handlePasswordChange
                            }
                        />

                              {
                                  (() => {
                                      if (this.state.email.length === 0 || this.state.password.length === 0) {
                                         return (< Button color = 'blue'
                                                              className = "roundBorderRadious"
                                                              disabled = "false"
                                                              fluid size = 'large' >
                                                                Login </Button>)
                                      }
                                      else {
                                            return ( <
                                                    Button color = 'blue'
                                                    className = "roundBorderRadious"
                                                    fluid size = 'large' >
                                                    Login </Button> )
                                      }
                                  })()
                              }
            </ Segment >
            </ Form>
            < Message 
            className = "roundBorderRadious boldFontWeigh"
            style = {
                {
                    fontSize: "1.3em",
                    fontWeight: "bold",
                    color: "#5C5F64",
                    backgroundColor: '#ECF1FF'
                }
            }
            >
            New to Decompress ? < a href = 'signup'
            style = {
                {
                    textDecoration: 'underline',
                    color: '#2b7fed'
                }
            } > Sign Up </ a> 
            </Message > </Grid.Column>
            </ Grid >
        );
    }
}

export default LoginComponent;