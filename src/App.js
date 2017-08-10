// @flow
import React from 'react';
import { Provider } from 'react-redux';

import NavigatorWithState from './Navigator';
import createStore from './redux/createStore';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <NavigatorWithState />
  </Provider>
);

export default App;
