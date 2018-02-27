import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const links = [
  {name: 'Landing', path: '/'},
  {name: 'Chores', path: '/chores'}
]

class Navbar extends React.Component{

  showLinks = () => {
    return links.map( link => {
      return (
        <Menu.Menu>
          <Menu.Item as={NavLink} to={link.path}>{link.name}</Menu.Item>
        </Menu.Menu>
      )
    })
  }

  render(){
    return(
      <Menu
        inverted
        size='huge'
        color='purple'
      >
        {this.showLinks()}
      </Menu>
    )
  }
}

export default withRouter(connect()(Navbar));
