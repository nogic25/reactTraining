// reducer has a primary goal to compose an object which should update the state
//reducers repond to actions which update the store
// take two parameters .First represnt the incoming parameter(redux state)
// default for the state is an empty object insted of undefined
import { SET_STACK} from '../actions';

function stack(state = {}, action) {
  switch (action.type) {
    case SET_STACK:
      return action.stack;
    default:
      return state;
  }
}

export default stack;




