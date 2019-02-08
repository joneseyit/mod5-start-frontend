import React, { Component } from "react";
import { connect } from "react-redux";
import PhotoCard from "./PhotoCard";
import { showPhoto } from "../actions/actions";
import { Card } from "semantic-ui-react";

class ShowPhotos extends Component {
  fetchPhoto = () => {
    const id = this.props.match.params.id;
    fetch(`http://localhost:3000/api/v1/photos/${id}`)
      .then(res => res.json())
      .then(photo => this.props.dispatch(showPhoto(photo)));
  };

  componentDidMount() {
    this.fetchPhoto();
  }

  render() {

    return(
      this.props.photo.created_at === undefined ? (<p>Loading...</p>) : (<PhotoCard photo={this.props.photo} />)

    )


  }
}

const mapStateToProps = state => {
  return { photo: state.photo };
};

export default connect(mapStateToProps)(ShowPhotos);
