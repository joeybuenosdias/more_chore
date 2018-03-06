import React from 'react';
import { connect } from 'react-redux';
import { getChores } from '../actions/chores';
import { Button, Grid } from 'semantic-ui-react';

class DashboardData extends React.Component {

  state = { loaded: false }

  componentDidMount(){
    this.props.dispatch(getChores(this.setLoaded))
  }

  setLoaded = () => {
    setTimeout(() => {
        this.setState({ loaded: true })
      }, 1500
    )
  }

  showCompletedChoreData = (choreList) => {
    let completedCount = choreList.filter( ch => ch.completed === true)
    return <Button>{completedCount.length}</Button>
  }

  showIncompleteChoreData = (choreList) => {
    let incompleteCount = choreList.filter( ch => ch.completed === false)
    return <Button>{incompleteCount.length}</Button>
  }

  render (){

    return (
      <Grid.Row columns={3} centered>
        <Grid.Column>
          <Button>Profile</Button>
        </Grid.Column>
        <Grid.Column>
        {this.showCompletedChoreData(this.props.chores)}
        </Grid.Column>
        <Grid.Column>
          {this.showIncompleteChoreData(this.props.chores)}
        </Grid.Column>
      </Grid.Row>
    )
  }
}

const mapStateToProps = (state) => {
  return { chores: state.chores}
}

export default connect(mapStateToProps)(DashboardData)
