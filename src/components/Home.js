import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from 'semantic-ui-react'

let image = `https://images.unsplash.com/photo-1518558997970-4ddc236affcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`;

const homeBg = {
  backgroundImage: `url(${image})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh"
};

const start = {
  display: "flex",
  justifyContent: "center"
};

class Home extends Component {
  handleOnClick = e => {
    this.props.dispatch(test("HEY HEY HEY"));
  };

  componentDidMount(){
    console.log(navigator.geolocation.getCurrentPosition((data) => {
      return data.coords.latitude
    })
  )}

  render() {

    return (
      <div style={homeBg}>
        <Container style={start}>
          <div style={{ marginTop: "200px" }}>
            <img
              src="https://fontmeme.com/permalink/190125/50588292a806956543bf3406ec36aaf3.png"
              alt="graffiti-fonts"
              border="0"
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default connect()(Home);
