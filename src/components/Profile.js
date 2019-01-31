import React, { Component } from 'react'

export default class Profile extends Component {

  fetchUser = () => {
    let id = parseInt(localStorage.id)
    fetch(`http://localhost:3000/api/v1/users/${id}`)
    .then(res => res.json())
    .then()
  }

  render(){
    return (
      <h1>Make me a Profile</h1>
      
    )
  }

}
