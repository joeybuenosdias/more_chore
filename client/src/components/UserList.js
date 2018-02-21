import React from 'react';
import { connect } from 'react-redux';
import { getUsers, showUser } from '../actions/users';
import UserItem from './UserItem';

class UserList extends React.Component{

  componentDidMount(){
    this.props.dispatch(getUsers())
  }

  render(){

    return (
      <ul>
        {this.props.users.map( (user) => {
          return (
            <li key={user.id}>
              <h3>{user.name}</h3>
              <h5>{user.email}</h5>
              <button onClick={() => this.props.dispatch(showUser(user.id))}>View</button>
            </li>
          )
        })}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(UserList);
