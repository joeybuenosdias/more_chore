import React, { Component } from 'react';

import ChoreForm from './ChoreForm';
import ChoreList from './ChoreList';

const styles = {
  div: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '25px'
  }
}

class Chores extends Component{

  render(){
    return (
      <div>
        <ChoreForm />
        <ChoreList />
      </div>
    )
  }
}

export default Chores;
