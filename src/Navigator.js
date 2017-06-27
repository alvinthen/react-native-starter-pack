// @flow
import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, type NavigationState } from 'react-navigation';
import People from './containers/People';
import Person from './components/Person';

export const Navigator = StackNavigator({
  People: {
    screen: People,
    navigationOptions: {
      title: 'SW Characters',
    },
  },
  Person: { screen: Person },
});

type Props = { dispatch: Function, nav: NavigationState };

const NavigatorWithState = (props: Props) => (
  <Navigator navigation={addNavigationHelpers({
    dispatch: props.dispatch,
    state: props.nav,
  })}
  />
);

const mapStateToProps = state => ({ nav: state.nav });

export default connect(mapStateToProps)(NavigatorWithState);
