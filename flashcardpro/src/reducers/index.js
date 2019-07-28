// reducer has a primary goal to compose an object which should update the state
//reducers repond to actions which update the store
// take two parameters .First represnt the incoming parameter(redux state)
// default for the state is an empty object insted of undefined
import {combineReducers} from 'redux'
import { SET_STACK,LOAD_STACK,ADD_STACK} from '../actions';

function stack(state = {}, action) {
  switch (action.type) {
    case SET_STACK:
      return action.stack;
    default:
      return state;
  }
}
//array of stack objects
function stacks(state=[],action){
switch (action.type) {
    case LOAD_STACK:
      return action.stacks;
      case ADD_STACK:
        //spread operator, creating a clone of our current state
      return [...state, {...action.stack, id:state.length}]
    default:
      return state;
  }
}

export default combineReducers({stack,stacks});




