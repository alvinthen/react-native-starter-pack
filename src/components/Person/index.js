// @flow
import React from 'react';
import { Text, View } from 'react-native';
import type { NavigationProps } from 'react-navigation';

type Props = { navigation: NavigationProps };

const Person = ({ navigation }: Props) => (
  <View>
    <Text>{navigation.state.params.name}</Text>
    <Text>{navigation.state.params.gender}</Text>
    <Text>{navigation.state.params.height}</Text>
    <Text>{navigation.state.params.mass}</Text>
  </View>
);

Person.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.name,
});

export default Person;
