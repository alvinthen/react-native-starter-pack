// @flow
import { cardStackReducer, actions } from 'react-native-navigation-redux-helpers';

type NavigationState = {
  key: string;
  index: number;
  routes: Array<Object>;
};

/* Initial state */
const initialState: NavigationState = {
  key: 'GlobalNavigation',
  index: 0,
  routes: [
    { key: 'index' },
  ],
};

/**
 * From react-native-navigation-redux-helpers
 * pushRoute,
 * popRoute,
 * jumpTo,
 * reset,
 * replaceAt,
 * replaceAtIndex,
 * jumpToIndex,
 * back,
 * forward,
 * get,
 * has,
 * indexOf
 */
export { actions };

export default cardStackReducer(initialState);
