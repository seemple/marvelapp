import React, { Component } from 'react'
import { Menu, Sidebar, Icon } from 'semantic-ui-react'

class MenuItem extends Component {
  state = { activeItem: 'home', visible:false }
  
  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem,visible } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.toggleVisibility} />
          </Menu.Menu>
        </Menu>

        <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
                <Menu.Item name='home'>
                <Icon name='home' />
                Home
                </Menu.Item>
                <Menu.Item name='gamepad'>
                <Icon name='gamepad' />
                Games
                </Menu.Item>
                <Menu.Item name='camera'>
                <Icon name='camera' />
                Channels
                </Menu.Item>
        </Sidebar>
      </div>
    )
  }
}

export default MenuItem;