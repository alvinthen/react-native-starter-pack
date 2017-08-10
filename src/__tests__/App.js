import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Index from '../App';

global.fetch = jest.fn(() => new Promise(resolve => resolve()));

it('renders correctly', () => {
  renderer.create(<Index />);
});
