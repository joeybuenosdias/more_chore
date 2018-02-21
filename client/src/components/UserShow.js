import React from 'react';
import { connect } from 'react-redux';

class UserShow extends React.Component {

  render(){
    let user = this.props;
    return(
      <div>
        {user.name} - {user.id}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, user: state.users.filter(u => u.id === this.props.match.params.id)}
}

export default connect(mapStateToProps)(UserShow)
