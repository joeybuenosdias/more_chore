import React from 'react';
import { connect } from 'react-redux';
import { addChore } from '../../actions/chores';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    border: '1px solid black',
    width: '25vw'
  }
}

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
      <form
        style={styles.form}
        onSubmit={this.handleSubmit}
      >
        <input
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
          placeholder='Enter Title of Chore Here'
        />
        <textarea
          name='description'
          value={this.state.description}
          onChange={this.handleChange}
          placeholder='Enter Description of Chore Here'
        ></textarea>
        <button
          onClick={this.handleSubmit}
        >SUBMIT!</button>
      </form>
    )
  }
}

export default connect() (ChoreForm);
