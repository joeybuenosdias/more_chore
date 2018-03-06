import React from 'react';
import { connect } from 'react-redux';
import { getChores } from '../actions/chores';
import { Button, Grid, Segment, Label } from 'semantic-ui-react';

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
    return (
      <Segment
        raised
        textAlign='center'
      >
        <Button
          positive
          label={<Label color='green'>{completedCount.length}</Label>}
          content='your completed chores'
        />
      </Segment>
    )
  }

  showIncompleteChoreData = (choreList) => {
    let incompleteCount = choreList.filter( ch => ch.completed === false)
    return (
      <Segment
        raised
        textAlign='center'
      >
        <Button
          negative
          label={<Label color='red'>{incompleteCount.length}</Label>}
          content='your incomplete chores'
        />
      </Segment>
    )
  }

  showChoreTotalData = (choreList) => {
    let totalChores = choreList.length;
    return (
      <Segment
        raised
        textAlign='center'
      >
        <Button
          primary
          label={<Label color='blue'>{totalChores}</Label>}
          content='your total chores'
        />
      </Segment>
    )
  }

  render (){
    return (
      <Grid divided>
        <Grid.Row columns={3}>
          <Grid.Column>
            {this.showChoreTotalData(this.props.chores)}
          </Grid.Column>
          <Grid.Column>
            {this.showCompletedChoreData(this.props.chores)}
          </Grid.Column>
          <Grid.Column>
            {this.showIncompleteChoreData(this.props.chores)}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return { chores: state.chores}
}

export default connect(mapStateToProps)(DashboardData)
