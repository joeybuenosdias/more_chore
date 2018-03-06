//LIBRARIES
import React from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Header, Form, Button, Icon } from 'semantic-ui-react';

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
      <Container>
        <Grid
          style={{height: '80vh'}}
          textAlign='center'
          verticalAlign='middle'
        >
          <Grid.Column style={{maxWidth: 450}}>
            <Header>{ title }</Header>
            <Icon
              name='check circle'
              color='violet'
              size='huge'
            />
            <Form
              onSubmit={this.handleSubmit}
            >
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
              <Button
                color='violet'
              >Submit</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default connect()(Auth);
