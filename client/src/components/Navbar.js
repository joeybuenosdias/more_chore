import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { logout } from '../actions/user';

const links = [
  { name: 'Landing', path: '/' },
  { name: 'About', path: '/about' }
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

  buildNavigation = (navs) => {
    let { location, history, dispatch } = this.props;
    return navs.map( (nav, i) => {
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
      return navs = [...links, ...authenticatedLinks];
    } else {
      return navs = [...links, ...unAuthenticatedLinks];
    }

    return(
      <Menu
        inverted
        size='huge'
        color='purple'
      >
        {this.buildNavigation(navs)}
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.user._id }
}

export default withRouter(connect(mapStateToProps)(Navbar));
