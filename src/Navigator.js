import React, { PropTypes } from 'react';
import {
  BackAndroid,
  NavigationExperimental,
} from 'react-native';
import { connect } from 'react-redux';
import { actions as navActions } from './ducks/navigation';
import Home from './components/Home';

const {
  PropTypes: NavigationPropTypes,
  CardStack: NavigationCardStack,
} = NavigationExperimental;

class Navigator extends React.Component {
  static propTypes = {
    navigationState: NavigationPropTypes.navigationState.isRequired,
    dispatch: PropTypes.func,
  };

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => this.handleBackButton());
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', () => this.handleBackButton());
  }

  handleBackButton() {
    if (this.props.navigationState.index > 0) {
      this.props.dispatch(navActions.popRoute('GlobalNavigation'));
      return true;
    }

    return false;
  }

  renderScene(props) {
    const { extraText, key } = props.scene.route;

    if (key === 'index') {
      return <Home />;
    }

    return <Home extraText={extraText} />;
  }

  render() {
    return (
      <NavigationCardStack
        renderScene={props => this.renderScene(props)}
        navigationState={this.props.navigationState}
        onNavigateBack={() => {
          this.props.dispatch(navActions.popRoute('GlobalNavigation'));
        }}
      />
    );
  }
}

function select(store) {
  return {
    navigationState: store.navigation,
  };
}

export default connect(select)(Navigator);
