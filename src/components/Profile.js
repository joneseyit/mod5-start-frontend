import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/actions";
import { Card, Image } from "semantic-ui-react";
import PhotoCard from './PhotoCard'

class Profile extends Component {
  //grab ID of user from local localStorage
  //dispatch to the store to update the state of userID to this person
  //use mapstate to props to make the user props available?
  //do fetch request?
  //render based on props from fetch request

  fetchUser = () => {
    let id = parseInt(localStorage.id);
    return fetch(`http://localhost:3000/api/v1/users/${id}`)
      .then(res => res.json())
      .then(user => this.props.dispatch(addUser(user)));
  };

  componentDidMount() {
    this.fetchUser();

  }
  //anon avatar
  // http://bestnycacupuncturist.com/wp-content/uploads/2016/11/anonymous-avatar-sm.jpg
  render() {
    return (
      <div style={{ fontFamily: 'Rock Salt, cursive' }}>
        {this.props.user === (undefined || null) ? (
          ""
        ) : (
          <div style={{ fontFamily: 'Rock Salt, cursive' }}>
            <h1 style={{ fontFamily: 'Rock Salt, cursive' }}>What up {this.props.user.name}</h1>
            <Card.Group centered >
              <Card>
                <Image src="http://bestnycacupuncturist.com/wp-content/uploads/2016/11/anonymous-avatar-sm.jpg" />
                <Card.Content>
                  <Card.Header>{this.props.user.name}</Card.Header>
                  <Card.Description>My bio: {this.props.user.bio}</Card.Description>
                </Card.Content>
                <Card.Content extra />
              </Card>
            </Card.Group>
            {console.log(this.props.user.photos)}
            <h3>St.Art I posted...</h3>

              {this.props.user.photos !== undefined ? (this.props.user.photos.map(photo => <PhotoCard photo={photo} />)) : <p>You haven't posted any photos yet</p>}

          </div>
        )}
      </div>
    ); //return )
  }
}
// <h2>My name is...{this.props.user.name}</h2>
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Profile);
