import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
// import PhotoContainer from './components/PhotoContainer'
import Profile from './components/Profile'
// import ShowPhotos from './components/ShowPhotos'
import Login from './components/Login'


import 'semantic-ui/dist/semantic.min.css';



export default class App extends Component {
  render() {
    return (
      <div className="App">

          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/profile' component={Profile} />
          </Switch>
      </div>
    );
  }
}
