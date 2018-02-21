//LIBRARIES
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//FILES
import Landing from './components/Landing';
import UserList from './components/UserList';
import NoMatch from './components/NoMatch';

class App extends React.Component{
  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/users' component={UserList} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }
}

export default App;
