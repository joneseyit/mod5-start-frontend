import React, { Component, Fragment } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/actions'
import { connect } from 'react-redux'

class NavBar extends Component {


  handleLogout = (e) => {
    this.props.dispatch(logoutUser())
  }
  //Color of NavBar  = C34705
  // https://fontmeme.com/permalink/190131/ab833960b7dac9f34e01a0920bcba65f.png
  // https://fontmeme.com/permalink/190131/0bed7502ef330463832c4b8f25039d53.png
  render() {

    return (
      <Menu stackable inverted>
        <Menu.Item >
          <Link to='/' >
            <img src="https://fontmeme.com/permalink/190131/ab833960b7dac9f34e01a0920bcba65f.png" size='large'/>
            <h3 style={{ fontFamily: 'Rock Salt, cursive' }}>Find and Discover Street Art in Your Community</h3>
          </Link>
        </Menu.Item>

        <Menu.Item as={ Link } to='/photos'
          name='/photos'
        >
          Find St.Art<br/>by Image
        </Menu.Item>

        <Menu.Item as={ Link } to='/map'
          name='/map'
        >
          Find St.Art on Map
        </Menu.Item>

        {localStorage.username ? (
          <React.Fragment>

          <Menu.Item as={ Link } to='/create_photo'
            name='create_photo'
          >
            Share/Post St.Art
          </Menu.Item>

          <Menu.Item as={ Link } to='/profile'
            name='Profile'
          >
            Profile
          </Menu.Item>

          <Menu.Item as={ Link } to='/' onClick={(e) => this.handleLogout(e)}>
            Logout
          </Menu.Item>

          </React.Fragment>
        ) :
        (
          <Menu.Item as={ Link } to='/login' name='sign-in'  >
              Log-in <br/><br/>
              Sign-up
          </Menu.Item>
        )}





      </Menu>


    )
  }
}
const mapStateToProps = ({user}) => {
  return user
}

export default connect(mapStateToProps)(NavBar)
