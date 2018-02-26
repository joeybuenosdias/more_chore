//LIBRARIES
import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';

//FILES
import ChoreForm from './ChoreForm';
import ChoreList from './ChoreList';

class Chores extends Component {

  render(){
    return (
      <Container>
        <Grid>
          <Grid.Row columns={2} divided>
            <Grid.Column>
              <ChoreForm />
            </Grid.Column>
            <Grid.Column>
              <ChoreList />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default Chores;
