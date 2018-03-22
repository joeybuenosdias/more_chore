import React from 'react';
import { Container, Segment, Grid } from 'semantic-ui-react';
import WelcomeParagraph from './WelcomeParagraph';
import LandingHeader from './LandingHeader';

const Landing = () => (
  <Container>
    <Segment>
      <Grid
        container
        divided='vertically'
      >
        <Grid.Row
          columns={1}
        >
          <Grid.Column>
            <LandingHeader />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          columns={1}
          >
          <Grid.Column>
            <WelcomeParagraph />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Container>
);

export default Landing;
