// @flow
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import NavigatorWithState from './Navigator';
import createStore from './redux/createStore';

const { persistor, store } = createStore();

const App = () => (
  <Provider store={store}>
    <PersistGate
      loading={<ActivityIndicator />}
      persistor={persistor}
    >
      <NavigatorWithState />
    </PersistGate>
  </Provider>
);

export default App;
