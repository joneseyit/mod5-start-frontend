import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  //Color of NavBar  = C34705
  // https://fontmeme.com/permalink/190131/ab833960b7dac9f34e01a0920bcba65f.png
  // https://fontmeme.com/permalink/190131/0bed7502ef330463832c4b8f25039d53.png
  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable inverted size='medium'>
        <Menu.Item size='medium'>
          <Link to='/' >
            <img src="https://fontmeme.com/permalink/190131/ab833960b7dac9f34e01a0920bcba65f.png" size='large'/>
          </Link>
        </Menu.Item>

        <Menu.Item as={ Link } to='/profile'
          name='Profile'
        >
      
          Profile
        </Menu.Item>


        <Menu.Item as={ Link } to='/photos'
          name='/photos'
        >
          Photos
        </Menu.Item>


        <Menu.Item as={ Link } to='/login' name='sign-in'  >
            Log-in
        </Menu.Item>
      </Menu>
    )
  }
}
