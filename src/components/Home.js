import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { test }  from '../actions/actions'

class Home extends Component {
  handleOnClick = (e) => {
    this.props.dispatch(test("HEY HEY HEY"))
  }
  render(){
    return(
      <h1 onClick={(e) => this.handleOnClick(e)}>You hit home</h1>
    )
  }
}

export default connect()(Home)
