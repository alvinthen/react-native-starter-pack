// @flow
import React from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

type Props = {
  people: Array<{ name: string, url: string }>,
  goToPerson: Function,
};

export default class People extends React.Component<Props> {
  renderRow({ item }: any) {
    return (
      <TouchableOpacity onPress={() => this.props.goToPerson(item)}>
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

