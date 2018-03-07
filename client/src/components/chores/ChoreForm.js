//LIBRARIES
import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, TextArea, Button, Header } from 'semantic-ui-react';

//FILES
import { addChore } from '../../actions/chores';

class ChoreForm extends React.Component {

  state = {}

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let chore = this.state;
    this.props.dispatch(addChore(chore));
    this.setState({title: '', description: ''})
  }

  render(){
    return(
      <Form
        onSubmit={this.handleSubmit}
      >
        <Header
          textAlign='center'
          color='grey' as='h1'
        >
          Add Chores Here
        </Header>
        <Input
          fluid
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
          placeholder='Enter Title of Chore Here'
        />
        <TextArea
          name='description'
          value={this.state.description}
          onChange={this.handleChange}
          placeholder='Enter Description of Chore Here'
          rows={10}
        ></TextArea>
        <Button
          fluid
          color='violet'
          onClick={this.handleSubmit}
        >
          SUBMIT!
        </Button>
      </Form>
    )
  }
}

export default connect() (ChoreForm);
