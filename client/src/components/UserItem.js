import React from 'react';
import { connect } from 'react-redux';

const UserItem = ({user}) => {
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(UserItem);
