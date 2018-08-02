// @flow
import React from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import type { NavigationScreenProp, NavigationState } from 'react-navigation';
import styles from './styles';

type Props = {
  people: Array<{ name: string, url: string }>,
  navigation: NavigationScreenProp<any>,
  doFetchPeople: Function,
};

export default class People extends React.Component<Props> {
  componentDidMount() {
    this.props.doFetchPeople();
  }

  renderRow({ item }: any) {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Person', item)}>
        <Text style={styles.item}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ListEmptyComponent={ActivityIndicator}
          data={this.props.people}
          renderItem={row => this.renderRow(row)}
          keyExtractor={item => item.url}
        />
      </View>
    );
  }
}
