import React, { Component } from 'react'

export default class Profile extends Component {

  //grab ID of user from local localStorage
  //dispatch to the store to update the state of userID to this person
  //use mapstate to props to make the user props available?
  //do fetch request?
  //render based on props from fetch request

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
