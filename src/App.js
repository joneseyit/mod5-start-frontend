import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Profile from './components/Profile'
// import ShowPhotos from './components/ShowPhotos'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Home from './components/Home'
import PhotoContainer from './components/PhotoContainer'
import Signup from './components/Signup'
import CreatePhoto from './components/CreatePhoto'
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
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/create_photo' component={CreatePhoto} />
        </Switch>
      </div>
    );
  }
}
