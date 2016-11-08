import React, { PropTypes } from 'react';
import {
  Text,
  View,
  TouchableNativeFeedback,
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
      Double tap R on your keyboard to reload,{'\n'}
      Shake or press menu button for dev menu
    </Text>

    <TouchableNativeFeedback onPress={props.navigate}>
      <View>
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
      </View>
    </TouchableNativeFeedback>
  </View>
);

Home.propTypes = {
  extraText: PropTypes.string,
  navigate: PropTypes.func,
};

export default Home;
