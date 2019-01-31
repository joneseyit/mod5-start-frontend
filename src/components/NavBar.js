import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  //Color of NavBar  = C34705
  // https://fontmeme.com/permalink/190131/ab833960b7dac9f34e01a0920bcba65f.png
  // https://fontmeme.com/permalink/190131/0bed7502ef330463832c4b8f25039d53.png
  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable inverted size='massive'>
        <Menu.Item size='medium'>
          <img src="https://fontmeme.com/permalink/190131/ab833960b7dac9f34e01a0920bcba65f.png" size='large'/>
        </Menu.Item>

        <Menu.Item
          name='Home'
          active={activeItem === 'features'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='Photos'
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          Photos
        </Menu.Item>

        <Menu.Item name='sign-in' active={activeItem === 'sign-in'} onClick={this.handleItemClick}>
          Sign-in
        </Menu.Item>
      </Menu>
    )
  }
}
