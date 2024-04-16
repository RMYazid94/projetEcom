import React, { Component } from 'react'
import { MenuItem, Menu } from 'semantic-ui-react '
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Products from './Products'

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
<Router>
      <Menu stackable>
        <MenuItem>
          <img alt='logo' src='https://www.1min30.com/wp-content/uploads/2019/02/Le-logo-Apple.jpg' />
        </MenuItem>

        <MenuItem
          name='Product'
          active={activeItem === 'Product'}
          onClick={this.handleItemClick}
        >
          Product
        </MenuItem>

        <MenuItem
          name='testimonials'
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          Testimonials
        </MenuItem>

        <MenuItem
          name='sign-in'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
        >
          Sign-in
        </MenuItem>
      </Menu>
<Route path='/product' component={Products}/>
 
      </Router>
    )
  }
}

