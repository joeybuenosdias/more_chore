import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Chores from './Chores';
import ChoreView from './ChoreView';
import { getChores } from '../../actions/chores';

class FetchChores extends React.Component {

  state = { loaded: false }

  componentDidMount(){
    this.props.dispatch(getChores(this.setLoaded))
  }

  setLoaded = () => {
    setTimeout(() => {
        this.setState({ loaded: true })
      }, 1000
    )
  }

  render(){
    let { loaded } = this.state
    if(loaded){
      return(
        <div>
          <Route path='/chores' component={Chores} />
          <Route path='/chores/:id' component={ChoreView} />
        </div>
      )
    } else {
      return (
        <h1>...Loading</h1>
      )
    }
  }
}

export default connect()(FetchChores)
