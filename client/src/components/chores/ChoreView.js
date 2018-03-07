//LIBRARIES
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Segment, Header, Form, Input, TextArea, Button } from 'semantic-ui-react';

//FILES
import { updateChore } from '../../actions/chores';

class ChoreView extends React.Component {

  state = { edit: true, task: {...this.props.chore} }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit })
  }

  handleChange = (e) => {
    this.setState({ task: { ...this.state.task, [e.target.name]: e.target.value }})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(updateChore(this.state.task))
    this.setState({ edit: false })
  }

  render(){
    let {chore} = this.props;

    if(this.state.edit){
      return(
        <Grid centered>
          <Grid.Column width={6}>
          <Segment textAlign='center' padded raised>
            <Form
              onSubmit={this.handleSubmit}
            >
              <Header>Edit Chore</Header>
              <Input
                onChange={this.handleChange}
                value={this.state.task.title}
                placeholder={this.props.chore.title}
                name='title'
                fluid
              />
              <TextArea
                onChange={this.handleChange}
                value={this.state.task.description}
                placeholder={this.props.chore.description}
                name='description'
                rows={8}
              ></TextArea>
              <Button.Group fluid>
                <Button basic color='blue'>Save</Button>
                <Button basic color='red' onClick={this.toggleEdit}>Cancel</Button>
              </Button.Group>
            </Form>
          </Segment>
          </Grid.Column>
        </Grid>
      )
    } else {
      return (
        <Grid centered>
          <Grid.Column width={6}>
            <Segment textAlign='center'>
              <Button basic color='violet' as={ Link } to='/chores'>View all chores</Button>
                <Segment color='grey' raised>
                  <Header as='h1'>{chore.title}</Header>
                  <Header as='h4'>{chore.description}</Header>
                </Segment>
              <Button basic primary onClick={ this.toggleEdit }>Edit chore</Button>
            </Segment>
          </Grid.Column>
        </Grid>
      )
    }
  }
}

const mapStateToProps = (state, props) => {
  return {chore: state.chores.find( ch => ch._id === props.match.params.id)}
}

export default connect(mapStateToProps)(ChoreView);
