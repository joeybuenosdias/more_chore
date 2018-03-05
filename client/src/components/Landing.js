import React from 'react';
import { connect } from 'react-redux';
import { Container, Header, Segment, Icon } from 'semantic-ui-react';
import WelcomeParagraph from './WelcomeParagraph';

const styles = {
  segmentContainer: {
    height: '100vh',
    width: '100vw'
  }
}

const Landing = ({ username }) => (
  <Container>
    <Segment
      raised
      color='purple'
      >
      <Segment
        vertical
        raised
        textAlign='center'
      >
        <Header as='h1' color='grey'>
          { username ? `Welcome ${username}` : 'Welcome to MoreChore!' }
        </Header>
        <Icon
          name='check circle'
          color='purple'
          size='massive'
        />
      </Segment>
    </Segment>
    <WelcomeParagraph />
  </Container>
);

const mapStateToProps = (state) => {
  return { username: state.user.username }
}

export default connect(mapStateToProps)(Landing);
