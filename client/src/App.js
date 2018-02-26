//LIBRARIES
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//FILES
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import FetchChores from './components/chores/FetchChores';
import NoMatch from './components/NoMatch';

class App extends React.Component{
  render(){
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/chores' component={FetchChores} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }
}

export default App;
