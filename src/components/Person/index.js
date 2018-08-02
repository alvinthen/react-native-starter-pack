// @flow
import React from 'react';
import { Text, View } from 'react-native';
import type { NavigationScreenProp, NavigationState } from 'react-navigation';

type Props = { navigation: NavigationScreenProp<NavigationState> };

const Person = ({ navigation }: Props) => (
  <View>
    <Text>
      {navigation.getParam('name')}
    </Text>
    <Text>
      {navigation.getParam('gender')}
    </Text>
    <Text>
      {navigation.getParam('height')}
    </Text>
    <Text>
      {navigation.getParam('mass')}
    </Text>
  </View>
);

Person.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('name', 'Person name'),
});

export default Person;
