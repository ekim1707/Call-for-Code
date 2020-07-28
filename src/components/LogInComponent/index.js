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
        return ( 
            <Grid 
                className="blueBackgroundColor"
                textAlign='center'
                style={{ height: '100vh' }}
                verticalAlign='middle' 
            >
                <Grid.Column style={{ maxWidth: 600}} >
                    <Header 
                        as='h2'
                        color='blue'
                        textAlign='center'
                    >
                        <Image src={`${process.env.PUBLIC_URL}/img/logo.reshape.svg`} />
                        &nbsp; 
                        <div className = "blackFont">{content.LOGIN_TEXT}</div> 
                    </Header> 
                    <Form onSubmit={this.handleSubmit} size='large'>
                        <Segment stacked>
                            <Form.Input 
                                onChange={this.handleEmailChange}
                                fluid 
                                icon='user'
                                iconPosition='left'
                                placeholder='email address'
                                value={this.state.email}
                            /> 
                            <Form.Input 
                                onChange={this.handlePasswordChange}
                                fluid 
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                value={this.state.password}
                            /> 
                            <Button 
                                color='blue'
                                className="roundBorderRadious"
                                fluid 
                                size='large' 
                            >
                                {content.LOGIN} 
                            </Button> 
                        </Segment > 
                    </Form> 
                    <Grid.Row style={{ marginTop: "1em" }}>
                        <a href='signup'>
                            <Message 
                                style={{ backgroundColor: '#F4EFEF' }}
                                className="roundBorderRadious boldFontWeigh"
                            >
                                {content.SIGN_UP}
                            </Message>
                        </a> 
                    </Grid.Row>
                </Grid.Column> 
            </Grid >
        );
    }
}

export default LoginComponent;