import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

global.fetch = jest.fn(() => new Promise(resolve => resolve()));

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
