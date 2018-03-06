import React from 'react';
import { connect } from 'react-redux';
import { Segment, Header, Icon } from 'semantic-ui-react';

const LandingHeader = ({ username }) => (
  <Segment
    raised
    color='violet'
    >
    <Segment
      raised
      basic
      textAlign='center'
    >
      <Header as='h1' color='grey'>
        { username ? `Welcome ${username}` : 'Welcome to MoreChore!' }
      </Header>
      <Icon
        name='check circle'
        color='violet'
        size='massive'
      />
    </Segment>
  </Segment>
);

const mapStateToProps = (state) => {
  return { username: state.user.username }
}

export default connect(mapStateToProps)(LandingHeader);
