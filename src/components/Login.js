import React, { Component } from "react";
import { Grid, Form, Button, Segment, Header, Image, Message } from "semantic-ui-react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

//need a form import semantic ui





class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  fetchLogin = (username, password) => {
    const loginApi = 'http://localhost:3000/api/v1/login'
    // let username = "junior"
    // let password = 'batman'
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
       })
    }
    fetch(loginApi, options)
    .then(res => res.json())
    .then(payload => {
      //payload.errors? 
      localStorage.setItem("token", payload.token)
      localStorage.setItem("username", payload.user)
      localStorage.setItem("id", payload.id)
      this.props.history.push("/profile")
    })
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmitHandler = (event) => {
    let username = this.state.username
    let password = this.state.password
    this.fetchLogin(username, password)
  }

  render() {
    return (
      <div className='login-form'>

   <style>{`
     body > div,
     body > div > div,
     body > div > div > div.login-form {
       height: 100%;
     }
   `}</style>
   <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
     <Grid.Column style={{ maxWidth: 450 }}>
       <Header as='h2' color='teal' textAlign='center'>
         Log-in to your account
       </Header>
       <Form size='large' onSubmit={event => this.onSubmitHandler(event)}>
         <Segment stacked>
           <Form.Input
             fluid icon='user'
             iconPosition='left'
             placeholder='Username'
             name='username'
             onChange={this.handleOnChange} />
           <Form.Input
             fluid
             icon='lock'
             iconPosition='left'
             placeholder='Password'
             type='password'
             name='password'
             onChange={this.handleOnChange}
           />

           <Button color='teal' fluid size='large'>
             Login
           </Button>
         </Segment>
       </Form>
       <Message>
         New to us? <p>Sign Up</p>
       </Message>
     </Grid.Column>
   </Grid>
 </div>
)


}

}

export default connect()(Login);
