//LIBRARIES
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

//FILES
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import FetchChores from './components/chores/FetchChores';
import NoMatch from './components/NoMatch';

class App extends React.Component{
  render(){
    return (
      <div>
        <Container
          fluid
        >
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/chores' component={FetchChores} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </div>
    )
  }
}

export default App;
