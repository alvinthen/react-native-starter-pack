// @flow
import React from 'react';
import {
  ActivityIndicator, FlatList, Text, TouchableOpacity, View,
} from 'react-native';
import type { NavigationScreenProp, NavigationState } from 'react-navigation';
import styles from './styles';

type PeopleType = { name: string, url: string };
type Props = {
  people: Array<PeopleType>,
  navigation: NavigationScreenProp<NavigationState>,
  doFetchPeople: Function,
};

export default class People extends React.Component<Props> {
  componentDidMount() {
    const { doFetchPeople } = this.props;
    doFetchPeople();
  }

  navigate = (item: PeopleType) => {
    const { navigation } = this.props;
    navigation.navigate('Person', { ...item });
  }

  renderRow({ item }: any) {
    return (
      <TouchableOpacity onPress={() => this.navigate(item)}>
        <Text style={styles.item}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { people } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          ListEmptyComponent={ActivityIndicator}
          data={people}
          renderItem={row => this.renderRow(row)}
          keyExtractor={item => item.url}
        />
      </View>
    );
  }
}
