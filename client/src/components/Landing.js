import React from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

const Landing = ({ username }) => (
  <div>
    <Header as='h4'>
      { username ? `Welcome ${username}` : 'Welcome! Please sign in' }
    </Header>
  </div>
);

const mapStateToProps = (state) => {
  return { username: state.user.username }
}

export default connect(mapStateToProps)(Landing);
