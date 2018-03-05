import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

const WelcomeParagraph = () => (
  <Segment textAlign='center' color='purple'>
    <Header
      as='h3'
      color='grey'
    >Hi! Thank you for taking the time to visit More Chore, an awesome web application that allows anyone to keep of their daily lifes many chores.
      To get started please 'Register' in the navigation bar above, after registering a profile will be created for you.  Once the profile is created,
      you will need to 'Login' using the same username and password you just registered with, also located in the navigation bar above. After successfully
      logging in, you will have your own Chores Dashboard and user-friendly Chores List to guide you right through your day. Enjoy!
    </Header>
  </Segment>
)

export default WelcomeParagraph;
