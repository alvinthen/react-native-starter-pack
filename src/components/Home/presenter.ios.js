import React, { PropTypes } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import styles from './style';

const Home = props => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Welcome to React Native!
    </Text>
    <Text style={styles.instructions}>
      To get started, edit index.ios.js
    </Text>
    <Text style={styles.instructions}>
      Press Cmd+R to reload,{'\n'}
      Cmd+D or shake for dev menu
    </Text>

    <TouchableHighlight onPress={props.navigate}>
      {
        props.extraText ?
          <Text>
            {props.extraText}
            {'\nPress to pop'}
          </Text>
        :
        <Text>
          Push
        </Text>
      }
    </TouchableHighlight>
  </View>
);

Home.propTypes = {
  extraText: PropTypes.string,
  navigate: PropTypes.func,
};

export default Home;
