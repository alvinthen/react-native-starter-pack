import React, { PropTypes } from 'react';
import {
  Button,
  Text,
  View,
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

    <Text>
      { props.extraText }
    </Text>

    <Button
      onPress={props.navigate}
      title={props.extraText ?
        'Pop'
        :
        'Push'
      }
    />
  </View>
);

Home.propTypes = {
  extraText: PropTypes.string,
  navigate: PropTypes.func.isRequired,
};

Home.defaultProps = {
  extraText: '',
};

export default Home;
