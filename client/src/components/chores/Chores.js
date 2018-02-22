import React, { Component } from 'react';

import ChoreForm from './ChoreForm';
import ChoreList from './ChoreList';


class Chores extends Component{
  render(){
    return (
      <div>
        <ChoreList />
      </div>
    )
  }
}

export default Chores;
