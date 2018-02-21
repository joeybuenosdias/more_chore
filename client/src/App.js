//LIBRARIES
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//FILES
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import UserList from './components/UserList';
import UserShow from './components/UserShow';
import NoMatch from './components/NoMatch';

class App extends React.Component{
  render(){
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/users' component={UserList} />
          <Route path='/users/:id' component={UserShow} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }
}

export default App;
