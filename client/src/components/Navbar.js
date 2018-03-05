import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { logout } from '../actions/user';

const links = [
  { name: 'Landing', path: '/' },
]

const authenticatedLinks = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Chores', path: '/chores' },
  { name: 'Logout' }
]

const unAuthenticatedLinks = [
  { name: 'Login', path: '/login' },
  { name: 'Register', path: '/register'}
]

class Navbar extends React.Component{

  buildNavigation = (navItems) => {
    let { location, history, dispatch } = this.props;
    return navItems.map( (nav, i) => {
      return (
        <Menu.Item
          key={i}
          active={ nav.name !== 'Logout' && nav.path === location.pathname }
          name={ nav.name }
        >
          { nav.name === 'Logout' ?
            <a
              style={{cursor: 'pointer'}}
              onClick={ () => {
                dispatch(logout())
                history.push('/login')
              }}
            >
            { nav.name }
            </a>
            :
            <NavLink to={ nav.path }>
              { nav.name }
            </NavLink>
          }
        </Menu.Item>
      )
    });
  }

  render(){
    let { id } = this.props;
    let navs;

    if(id){
      navs = [...links, ...authenticatedLinks];
    } else {
      navs = [...links, ...unAuthenticatedLinks];
    }

    return(
      <Menu
        inverted
        size='huge'
        color='purple'
      >
        <Menu.Menu>
        {this.buildNavigation(navs)}
        </Menu.Menu>
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.user._id }
}

export default withRouter(connect(mapStateToProps)(Navbar));
