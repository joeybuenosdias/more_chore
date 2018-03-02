//LIBRARIES
import { combineReducers } from 'redux';

//FILES
import user from './user';
import chores from './chores';

const rootReducer = combineReducers({
  user,
  chores
});

export default rootReducer;
