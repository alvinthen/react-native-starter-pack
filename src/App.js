// @flow
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';

import { type Store } from 'redux';

import NavigatorWithState from './Navigator';
import createStore from './redux/createStore';

class App extends React.Component {
  state = { rehydrated: false };

  componentDidMount() {
    this.store = createStore(() => this.setState({ rehydrated: true }));
  }

  store: Store;

  render() {
    if (!this.state.rehydrated) {
      return <ActivityIndicator />;
    }
    return (
      <Provider store={this.store}>
        <NavigatorWithState />
      </Provider>
    );
  }
}

export default App;
