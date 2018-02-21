import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions/users';

class UserList extends React.Component{

  componentDidMount(){
    this.props.dispatch(getUsers())
  }

  render(){

    return (
      <ul>
        Userlist
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(UserList);
