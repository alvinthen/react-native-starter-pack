// @flow
import { combineReducers } from 'redux';
import people from './people';
import nav from './nav';

export default combineReducers({ people, nav });

// Put reducer keys that you do NOT want stored to persistence here
export const persistentBlacklist = [];
