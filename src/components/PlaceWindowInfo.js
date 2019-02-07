import React, { Component, Fragment } from "react";
import { InfoWindow } from "react-google-maps";
import { connect } from 'react-redux'

export class PlaceInfoWindow extends Component {
  //onclick send them to the page
  handleClick = (e) => {
    debugger
    this.props.history.push('/ShowPhoto')
  }

  render() {
    const { caption, title, img } = this.props;

    return (
      <InfoWindow style={{'height': '90vh' }}>
        <React.Fragment>
          <h1>{this.props.title}</h1>
          <p>{this.props.caption}</p>
          <img src={this.props.img} onClick={(e) => this.handleClick(e)}/>
        </React.Fragment>
      </InfoWindow>
    )
  }
}

const mapStateToProps = (state) => {
  return { photos: state.photos}
}

export default connect(mapStateToProps)(PlaceInfoWindow)
