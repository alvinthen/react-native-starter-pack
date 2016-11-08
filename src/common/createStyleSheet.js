import { StyleSheet, Platform } from 'react-native';

export default function createStyleSheet(styles: Object): {[name: string]: number} {
  const platformStyles = {};
  Object.keys(styles).forEach((name) => {
    const { ios, android, ...style } = { ...styles[name] };
    let newStyle = style;
    if (ios && Platform.OS === 'ios') {
      newStyle = { ...style, ...ios };
    }
    if (android && Platform.OS === 'android') {
      newStyle = { ...style, ...android };
    }
    platformStyles[name] = newStyle;
  });
  return StyleSheet.create(platformStyles);
}
