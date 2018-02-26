import React from 'react';
import { connect } from 'react-redux';
import { deleteChore, editChore } from '../../actions/chores';
import { Link } from 'react-router-dom';

import ChoreForm from './ChoreForm';

const styles = {
  choreContainer: {
    border: '1px solid black',
    padding: '10px'
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
}

class ChoreList extends React.Component {

  removeChore = (id) => {
    this.props.dispatch(deleteChore(id))
  }

  render(){
    const { dispatch } = this.props;
    return (
      <ul>
        {this.props.chores.map( (chore) => {
          return (
            <li key={chore._id}>
              <div style={styles.choreContainer}>
                <h1>{chore.title}</h1>
                <p>{chore.description} : {chore._id}</p>
                <div style={styles.buttonContainer}>
                  <Link to={`/chores/${chore._id}`}>View Chore</Link>
                  <button onClick={ () => this.removeChore(chore._id)}>delete</button>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return { chores: state.chores }
}

export default connect(mapStateToProps)(ChoreList)
