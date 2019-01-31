import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Router } from 'react-router-dom'
// import PhotoContainer from './components/PhotoContainer'
import Profile from './components/Profile'
// import ShowPhotos from './components/ShowPhotos'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Home from './components/Home'
import PhotoContainer from './components/PhotoContainer'


import 'semantic-ui/dist/semantic.min.css';



export default class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/photos' component={PhotoContainer} />
          </Switch>
      </div>
    );
  }
}
