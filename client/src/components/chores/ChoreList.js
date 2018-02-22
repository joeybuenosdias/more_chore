import React from 'react';
import { connect } from 'react-redux';
import { getChores } from '../../actions/chores';

class ChoreList extends React.Component {

  componentDidMount(){
    this.props.dispatch(getChores())
  }

  render(){

    return (
      <ul>
        {this.props.chores.map( (chore) => {
          return (
            <li key={chore._id}>
              <div>
                <h1>{chore.title}</h1>
                <p>{chore.description}</p>
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
