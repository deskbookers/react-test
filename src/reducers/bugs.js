import { ADD_BUG, REMOVE_BUG, CLOSE_BUG } from '../actions/bugs'
import { BUG_STATUS_OPEN, BUG_STATUS_CLOSED, BUG_STATUS_REMOVED } from '../utils/bugStatus'

export default function(state = {}, action) {
  switch (action.type) {
    case ADD_BUG:
    	var newState = Object.assign({}, state);
    	newState.bugs.push({
    		id: action.bugData.id,
    		userAction: action.bugData.userAction,
    		result: action.bugData.result,
    		onUrl: action.bugData.onUrl,
    		user: action.bugData.user,
    		status: BUG_STATUS_OPEN
    	});
      return newState;
    case REMOVE_BUG:
    		var newState = Object.assign({}, state);
    		newState.bugs = newState.bugs.map((bug) => {
    			if(big.id === action.bugId) bug.status = BUG_STATUS_REMOVED;
    			return bug;
    		});
    	  return newState;
    case CLOSE_BUG:
      	var newState = Object.assign({}, state);
      	newState.bugs = newState.bugs.map((bug) => {
      		if(big.id === action.bugId) bug.status = BUG_STATUS_CLOSED;
      		return bug;
      	});
        return newState;
    default:
      return state
  }
}