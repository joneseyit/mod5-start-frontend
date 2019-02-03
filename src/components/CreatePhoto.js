import React, { Component } from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addPhoto } from '../actions/actions'

class CreatePhoto extends Component {
  state = {
    photoFile: ''
  }

  onSubmitHandler = (e) => {
    e.preventDefault()

    let title = e.target.title.value
    let location = e.target.location.value
    let caption = e.target.caption.value
    let user_id = parseInt(localStorage.id)
    let picture = this.state.photoFile

    const formData = new FormData()
    formData.append('title', title)
    formData.append('location', location)
    formData.append('caption', caption)
    formData.append('user_id', user_id)
    formData.append('picture', picture)

    let options = {
      method: 'POST',
      body: formData
    }

    fetch('http://localhost:3000/api/v1/photos/', options)
    .then(res => res.json())
    .then(photo => this.props.dispatch(addPhoto(photo)))

    this.props.history.push('/photos')
  }

  fileHandler = (e) => {
    this.setState({ photoFile: e.target.files[0] })
  }

  render(){
    return (
    <Form onSubmit={(e) => this.onSubmitHandler(e)}>
      <Form.Field>
        <label>Title</label>
        <input
          placeholder="Title"
          name='title'
          onChange={this.onChangeHandler}
        />
      </Form.Field>

      <Form.Field>
        <label>Location</label>
        <input
          placeholder="Location"
          name='location'
          onChange={this.onChangeHandler}
        />
      </Form.Field>

      <Form.Field>
        <label>Caption what you got</label>
        <input
          placeholder="Caption"
          name='caption'
          control={TextArea}
          onChange={this.onChangeHandler}
        />
      </Form.Field>

      <Form.Field>
        <label>Upload your photo here por favor</label>
        <input
          type='file'
          placeholder="Photo"
          name='picture'
          onChange={this.fileHandler}
        />
      </Form.Field>
      <Form.Field>
        <input type='submit' />
      </Form.Field>
    </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(CreatePhoto)
