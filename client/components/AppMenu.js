import React, { Component } from 'react'
import { Menu, Segment,Input } from 'semantic-ui-react';
import {Link} from 'react-router';

export default class AppMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted>
        <Menu.Item name='Messages' active={activeItem === 'Messages'} as={Link} onClick={this.handleItemClick} to="/messages" />
        <Menu.Item name='Groupe' as={Link} active={activeItem === 'Groupe'} onClick={this.handleItemClick} to="/groupes" />
        <Menu.Item name='Evenements' as={Link} active={activeItem === 'Evenements'} onClick={this.handleItemClick} to="/evenements" />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item name='login' as={Link} active={activeItem === 'login'} onClick={this.handleItemClick} to="/login" />
          <Menu.Item name='signup' as={Link} active={activeItem === 'signup'} onClick={this.handleItemClick} to="/signup"/>
        </Menu.Menu>
      </Menu>
      </Segment>
    )
  }
}
