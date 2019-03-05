import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Redirect, withRouter, Link } from 'react-router-dom'
import { markedPhoto } from '../actions/actions'
import { connect } from 'react-redux'
import { getLocation } from '../actions/actions'

// <Link to={{ pathname: '/directions', state: { photo: props.photo } }}>
//   Get Directions
// </Link>


////www.google.com/maps/search/?api=1&query=${props.photo.latitude},${props.photo.longitude}
const ShowCard = props => {
  const { title, img, caption, location, id, latitude, longitude, created_at } = props.photo
  navigator.geolocation.getCurrentPosition( data => props.dispatch( getLocation(data) ))

  return (<div>
    <Card>
      <Image src={img} alt={title} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>Photo added {created_at.split('-')[0]}</Card.Meta>
        <Card.Description>{caption}</Card.Description>
      </Card.Content>
      <Card.Content>
        <Card.Description>Location notes: {location}</Card.Description>
      </Card.Content>
      <Link to={`/map/${id}`}>
        Find This Art on the Map
      </Link>
          <a href={`https://google.com/maps/dir/?api=1&origin=${props.location.lat},${props.location.lng}&destination=${latitude},${longitude}`} target="_blank" >
        Get Directions
      </a>

    </Card>
  </div>)
};

const mapStateToProps = (state) => {
  return { location: state.location}
}

export default connect(mapStateToProps)(ShowCard)
