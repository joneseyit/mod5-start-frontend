import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Profile from './components/Profile'
// import ShowPhotos from './components/ShowPhotos'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Home from './components/Home'
import PhotoContainer from './components/PhotoContainer'
import Signup from './components/Signup'
import CreatePhoto from './components/CreatePhoto'
import Map from './components/Map'
import 'semantic-ui/dist/semantic.min.css';
import ShowPhotos from './components/ShowPhotos'

//https://google.com/maps/search/?api=1&query=${this.props.photo.latitude},${this.props.photo.longitude}

class App extends Component {
  render() {
    console.log(this.props.photo)

    return (
      <div className="App" style={{ fontFamily: 'Rock Salt, cursive' }}>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/photos' component={PhotoContainer} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/create_photo' component={CreatePhoto} />
            <Route exact path='/map' component={Map} />
            <Route exact path='/show/:id' component={ShowPhotos} />
            <Route exact path='/map/:id' component={Map} />
            <Route path='/directions' component={() => { window.open(`https://google.com/maps/dir/?api=1&origin=${this.props.location.lat},${this.props.location.lng}&destination=${this.props.photo.latitude},${this.props.photo.longitude}`); return <Map/>;} }/>

        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photo: state.photo,
    location: state.location
  }
}

export default withRouter(connect(mapStateToProps)(App))
