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
      <div>
        <Link to={`/show/${id}`}>
        <InfoWindow  style={{'height': '90vh' }} >
          <React.Fragment>

            <h5>{this.props.title}</h5>
            <p>{this.props.caption}</p>
            <img src={this.props.img} style={{height: '80px'}} />

          </React.Fragment>
        </InfoWindow>
        </Link>

        <a href={`https://google.com/maps/dir/?api=1&origin=${this.props.location.lat},${this.props.location.lng}&destination=${this.props.photoLat},${this.props.photoLng}`} target="_blank" >
          Get Directions
        </a>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
    location: state.location
  }
}

export default connect(mapStateToProps)(PlaceInfoWindow)
