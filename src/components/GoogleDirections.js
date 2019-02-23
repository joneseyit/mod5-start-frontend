// import React from "react";
// import { compose, lifecycle, withProps } from "recompose";
// import {
//   DirectionsRenderer,
//   withGoogleMap,
//   withScriptjs,
//   GoogleMap
// } from "react-google-maps";
//
// const MapWithADirectionsRenderer = compose(
//   withProps({
//     googleMapURL:
//       "https://maps.googleapis.com/maps/api/js?key=AIzaSyB0Ag6Kca263tmba4j83iLV4N2_nj5epO4=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: "100%" }} />,
//     containerElement: <div style={{ height: "400px" }} />,
//     mapElement: <div style={{ height: "100%" }} />
//   }),
//   withScriptjs,
//   withGoogleMap,
//   lifecycle({
//     componentDidMount() {
//       const DirectionService = new google.maps.DirectionService();
//
//       DirectionService.route(
//         {
//           origin: new google.maps.LatLng(41.85073, -87.65126),
//           destination: new google.maps.LatLng(41.85258, -87.65141),
//           travelMode: google.maps.TravelMode.DRIVING
//         },
//         (result, status) => {
//           if (status === google.maps.DirectionsStatus.OK) {
//             this.setState({
//               directions: result
//             });
//           } else {
//             console.error(`error fetching directions ${result}`);
//           }
//         }
//       );
//     }
//   })
// )(props =>
//     <GoogleMap
//       defaultZoom={7}
//       defaultCenter={ new google.maps.LatLng(41.8525800, -87.6514100)}
//     >
//       {props.directions && <DirectionsRenderer directions={props.directions} /> }
//     </GoogleMap>
// );
//
// class GoogleDirections extends React.Component {
//   render() {
//     return (
//       <div>
//         <MapWithADirectionsRenderer />
//       </div>
//     )
//   }
// }
//
// export default GoogleDirections;
