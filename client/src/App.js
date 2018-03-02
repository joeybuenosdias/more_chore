//LIBRARIES
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

//FILES
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Auth from './components/Auth';

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
            <Route path='/about' component={About} />
            <Route path='/register' render={ (props) => <Auth {...props} title={'Register'} /> } />
            <Route path='/login' render={ (props) => <Auth {...props} title={'Login'} /> } />
          </Switch>
        </Container>
      </div>
    )
  }
}

export default App;
