import React from 'react';
import { Container, Icon, Grid, Header, Segment, Card, Loader, Dimmer } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getChores } from '../actions/chores';
import DashboardData from './DashboardData';

const dashboardInfo = [
  { iconName: 'user', header: 'Profile', title: 'Profile'},
  { iconName: 'check circle', header: 'Complete Chores', title: 'Complete' },
  { iconName: 'square outline', header: 'Incomplete Chores', title: 'Incomplete' }
]

class Dashboard extends React.Component {

  showDashboardOptions = () => {
    return dashboardInfo.map( (dash) => {
      return (
        <Grid.Column>
          <Card>
            <Segment>
              <Header textAlign='center' as='h2'>{dash.title}</Header>
            </Segment>
            <Icon
              name={dash.iconName}
              size='huge'
            />
            <Card.Meta>{dash.header}</Card.Meta>
          </Card>
        </Grid.Column>
      )
    })
  }

  render(){
    let { username } = this.props;
      return (
        <Container>
          <Segment>
            <Header textAlign='center'>Welcome {username}</Header>
            <Grid>
              <Grid.Row columns={3}>
                {this.showDashboardOptions()}
              </Grid.Row>
              <DashboardData />
            </Grid>
          </Segment>
        </Container>
      )
  }
}

const mapStateToProps = (state) => {
  return { ...state.user }
}

export default connect(mapStateToProps)(Dashboard);
