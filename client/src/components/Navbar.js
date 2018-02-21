import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const styles = {
  navbar: {
    width: '100vw',
    height: '15vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    border: '3px solid grey',
  },
  navlink: {
    color: 'white',
    textDecoration: 'none',
    margin: '50px',
    padding: '25px',
    border: '1px solid white',
    borderRadius: '10px'
  }
}

const links = [
  {name: 'Landing', path: '/'},
  {name: 'Users', path: '/users'},
  {name: 'Chores', path: '/chores'}
]

class Navbar extends React.Component{

  showLinks = () => {
    return links.map( link => {
      return (
        <NavLink style={styles.navlink} to={link.path}>{link.name}</NavLink>
      )
    })
  }

  render(){
    return(
      <div style={styles.navbar}>
        {this.showLinks()}
      </div>
    )
  }
}

export default connect()(Navbar)
