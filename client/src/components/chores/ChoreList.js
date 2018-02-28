//LIBRARIES
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List, Header, Segment, Button, Icon, Popup } from 'semantic-ui-react';

//FILES
import { deleteChore, updateChore } from '../../actions/chores';

class ChoreList extends React.Component {

  removeChore = (id) => {
    this.props.dispatch(deleteChore(id))
  }

  toggleChore = (chore) => {
    let updatedChore = { ...chore, completed: !chore.completed }
    this.props.dispatch(updateChore(updatedChore))
  }

  render(){
    return (
      <List>
        <Header color='grey' as='h1' textAlign='center'>Chore List</Header>
        {this.props.chores.map( (chore) => {
          return (
            <List.Item
              key={chore._id}
              >
              <List.Content>
                <Segment
                  textAlign='center'
                >
                  <Header as='h3'>{chore.title}</Header>
                  <Header as='h5' color='grey'>{chore.description}</Header>
                  <Segment
                    raised
                    textAlign='center'
                  >

                  <Popup
                    on='click'
                    position='bottom center'
                    trigger={
                    <Button
                        basic
                        color={ chore.completed ? 'blue' : 'red' }
                        size='large'
                      >delete</Button>
                    }
                    content={
                      <Button
                        color='red'
                        onClick={() => this.toggleChore(chore)}
                      >confirm</Button>
                    }
                  />

                    <Button.Group fluid>
                      <Button
                        basic
                        color='blue'
                        as={Link}
                        to={`/chores/${chore._id}`}
                        size='large'
                      >edit</Button>

                      <Popup
                        on='click'
                        position='bottom center'
                        trigger={
                        <Button
                            basic
                            color='red'
                            size='large'
                          >delete</Button>
                        }
                        content={
                          <Button
                            color='red'
                            onClick={() => this.removeChore(chore._id)}
                          >confirm</Button>
                        }
                      />
                    </Button.Group>
                  </Segment>
                </Segment>
              </List.Content>
            </List.Item>
          )
        })}
      </List>
    )
  }
}

const mapStateToProps = (state) => {
  return { chores: state.chores }
}

export default connect(mapStateToProps)(ChoreList)
