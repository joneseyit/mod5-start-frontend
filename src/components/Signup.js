import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Input, TextArea, Button, Container } from 'semantic-ui-react'


class Signup extends Component {
  state = {
    name: '',
    email: '',
    username: '',
    bio: '',
    password: '',
    errors: '',

  }

  onChangeHandler(e){
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmitHandler(){
    let body = this.state
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: body
      })

    }
    fetch('http://localhost:3000/api/v1/users/', options)
    .then(res => res.json())
    .then(user => {
      if(user.error){
        this.setState({ errors: user.error})
        this.props.history.push('/signup')
      } else {
        localStorage.setItem("token", user.token);
        localStorage.setItem("username", user.user);
        localStorage.setItem("id", user.id);
        this.props.history.push("/profile");
      }
    })
  }
  render(){
    return (
      <Container text>
      <Form>
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-name'
            control={Input}
            label='Name'
            placeholder='Name'
            onChange={(e) => this.onChangeHandler(e)}
            name='name'
          />
          <Form.Field
            id='form-input-control-username'
            control={Input}
            label='Username'
            placeholder='Username'
            onChange={(e) => this.onChangeHandler(e)}
            name='username'
          />
          <Form.Field
            control={Input}
            options="string"
            label='Email'
            placeholder='Email'
            onChange={(e) => this.onChangeHandler(e)}
            name='email'
          />
        </Form.Group>
        <Form.Field
          id='form-textarea-control-bio'
          control={TextArea}
          label='Bio'
          placeholder='Bio'
          onChange={(e) => this.onChangeHandler(e)}
          name='bio'
        />
        <Form.Input
          id='form-textarea-control-bio'
          type='password'
          label='Password'
          placeholder='Password'
          onChange={(e) => this.onChangeHandler(e)}
          name='password'
        />
        <Form.Field
          id='form-button-control-public'
          control={Button}
          content='Confirm'
          onClick={(e) => this.onSubmitHandler(e)}
        />
      </Form>
      </Container>
    )
  }
}

const mapStateToProps = ({user}) => {
  return user
}

export default connect(mapStateToProps)(Signup)
