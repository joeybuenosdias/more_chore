//LIBRARIES
import React from 'react';
import { connect } from 'react-redux';
import { Header, Form, Button } from 'semantic-ui-react';

//FILES
import { authenticate } from '../actions/user';

class Auth extends React.Component {
  defaults = { email: '', password: ''}
  state = { ...this.defaults }

  handleSubmit = (e) => {
    e.preventDefault();
    let { title, history, dispatch } = this.props;
    let { email, password } = this.state;
    dispatch(authenticate(email, password, title, history))
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render(){
    let { title } = this.props;
    let { email, password } = this.state;
    return(
      <div>
        <Header>{ title }</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            name='email'
            label='email'
            required
            type='email'
            onChange={this.handleChange}
            value={email}
          />
          <Form.Input
            name='password'
            label='password'
            required
            type='password'
            onChange={this.handleChange}
            value={password}
          />
          <Button>SUBMIT</Button>
        </Form>
      </div>
    )
  }
}

export default connect()(Auth);
