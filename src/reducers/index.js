import { combineReducers } from 'redux';
import navigation from '../ducks/navigation';

// glue all the reducers together into 1 root reducer
export default combineReducers({ navigation });

// Put reducer keys that you do NOT want stored to persistence here
export const persistentStoreBlacklist = [];
