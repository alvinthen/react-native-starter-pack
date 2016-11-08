import React from 'react';
import { Provider } from 'react-redux';

import Main from './Main';
import configureStore from './stores/configureStore';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({ isLoading: false })),
    };
  }

  render() {
    if (this.state.isLoading) {
      return null;
    }
    return (
      <Provider store={this.state.store}>
        <Main />
      </Provider>
    );
  }
}

export default App;

/* eslint-disable */
console.disableYellowBox = true; // Temporarily disable warnings from NavigationExperimental
