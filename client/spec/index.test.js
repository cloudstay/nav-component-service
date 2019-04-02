import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App.jsx';

describe ('Renders Hello World', function() {
  test('Renders', function() {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  })
})