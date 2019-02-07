import React, { Component, Fragment } from "react";
import { InfoWindow } from "react-google-maps";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class PlaceInfoWindow extends Component {
  //onclick send them to the page
  handleClick = (e) => {
    this.props.history.push('/ShowPhoto')
  }

  render() {
    const { caption, title, img, id } = this.props;

    return (
      <InfoWindow  style={{'height': '90vh' }}>
        <React.Fragment>
          <h1>{this.props.title}</h1>
          <p>{this.props.caption}</p>
          <img as={ Link } to={`/show/${id}`} src={this.props.img} />
        </React.Fragment>
      </InfoWindow>
    )
  }
}

const mapStateToProps = (state) => {
  return { photos: state.photos}
}

export default connect(mapStateToProps)(PlaceInfoWindow)
