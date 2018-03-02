//LIBRARIES
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

//FILES
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import FetchChores from './components/chores/FetchChores';
import About from './components/About';
import Auth from './components/Auth';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';

class App extends React.Component{
  render(){
    return (
      <div>
        <Container fluid>
          <Navbar />
          <FetchUser>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route path='/about' component={About} />
              <ProtectedRoute path='/dashboard' component={Dashboard} />
              <ProtectedRoute path='/chores' component={FetchChores} />
              <Route path='/register' render={ (props) => <Auth {...props} title={'Register'} /> } />
              <Route path='/login' render={ (props) => <Auth {...props} title={'Login'} /> } />
            </Switch>
          </FetchUser>
        </Container>
      </div>
    )
  }
}

export default App;
