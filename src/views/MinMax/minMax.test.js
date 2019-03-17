import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MinMax from'./'

configure({adapter: new Adapter()});
test('Renders', () => {
const props = {
  title: 'minMax',
  value: '08038475647'
}
  const wrapper = shallow(<MinMax {...props} />);
  expect(wrapper).toMatchSnapshot();
});
