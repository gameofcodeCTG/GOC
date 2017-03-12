import React, {Component} from 'react';
import {Link} from 'react-router';
import {
  Button,
  Container,
  Divider,
  Form,
  Header,
  Image,
  Input,
  Message,
  Segment,
} from 'semantic-ui-react';
import ReactDOM  from 'react-dom';

class Login extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }
    
    handlePasswordChange(event){
        this.password = event.target.value;
    }
    
    handleEmailChange(event){
        this.email = event.target.value;
    }
    
    handleClick(e){
        e.preventDefault();
        console.log("email" + this.email.value );
        this.props.login(this.email,this.password);
    }
    
    render(){
        return (
                <Container text>
      <Divider hidden section />
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='http://react.semantic-ui.com/logo.png' />
        {' '}Log-in to your account
      </Header>
      <Form size='small'>
        <Segment stacked>
          <Form.Field>
            <Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={this.handleEmailChange}/>
          </Form.Field>
          <Form.Field>
            <Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' onChange={this.handlePasswordChange}/>
          </Form.Field>
          <Button fluid color='teal' size='small' onClick={this.handleClick}>LOGIN</Button>
        </Segment>
        <Message size='small'>
          <Header as='p' textAlign='center'>  New to us? <a href='#'>Sign Up</a></Header>
        </Message>
      </Form>
    </Container>
                );
    }
}

export default Login;