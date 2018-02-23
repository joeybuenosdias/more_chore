import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ChoreView = ({ chore={} }) => (
  <div>
    <Link to='/chores'>View all chores</Link>
    <h1>{chore.title}</h1>
    <h3>{chore.description}</h3>
  </div>
)

const mapStateToProps = (state, props) => {
  console.log(state.chores.filter( ch => state.chores._id === parseInt(props.match.params.id)))
  return {chore: state.chores.find( ch => ch._id === parseInt(props.match.params.id))}
}

export default connect(mapStateToProps)(ChoreView);
