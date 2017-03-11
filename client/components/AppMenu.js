import React, { Component } from 'react'
import { Menu, Segment,Input } from 'semantic-ui-react'

export default class AppMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted>
        <Menu.Item name='Messages' active={activeItem === 'Messages'} onClick={this.handleItemClick} />
        <Menu.Item name='Groupe' active={activeItem === 'Groupe'} onClick={this.handleItemClick} />
        <Menu.Item name='Evenements' active={activeItem === 'Evenements'} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
          <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
      </Segment>
    )
  }
}
