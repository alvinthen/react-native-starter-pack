import React from 'react';
import { StatusBar, View } from 'react-native';
import Navigator from './Navigator';

StatusBar.setBarStyle('light-content');

export default () => (
  <View style={{ flex: 1 }}>
    <Navigator />
  </View>
);
