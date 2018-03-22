import React from 'react';
import { Container, Icon, Grid, Header, Segment, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
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
          <Card centered>
            <Segment color='violet' inverted>
              <Header textAlign='center' as='h4'>{dash.title}</Header>
            </Segment>
            <Segment raised basic textAlign='center'>
              <Icon
                name={dash.iconName}
                size='massive'
                color='grey'
              />
            </Segment>
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
            <Header color='grey' as='h1' textAlign='center'>{username}</Header>
            <Grid divided>
              <Grid.Row columns={3}>
                {this.showDashboardOptions()}
              </Grid.Row>
            </Grid>
            <DashboardData/>
          </Segment>
        </Container>
      )
  }
}

const mapStateToProps = (state) => {
  return { ...state.user }
}

export default connect(mapStateToProps)(Dashboard);
