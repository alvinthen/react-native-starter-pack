// @flow
import { createAppContainer, createStackNavigator } from 'react-navigation';
import People from './containers/People';
import Person from './components/Person';

const MainNavigator = createStackNavigator({
  People: {
    screen: People,
    navigationOptions: {
      title: 'SW Characters',
    },
  },
  Person: { screen: Person },
}, {
  initialRouteName: 'People',
});

export default createAppContainer(MainNavigator);
