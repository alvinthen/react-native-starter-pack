// @flow
import { createStackNavigator } from 'react-navigation';
import People from './containers/People';
import Person from './components/Person';

export default createStackNavigator({
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
