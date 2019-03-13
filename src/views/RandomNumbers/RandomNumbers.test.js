import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RandomNumber from'./RandomNumbers'

configure({adapter: new Adapter()});
test('Renders', () => {
const props = {
  RandomNumbers: [
    "004956594304956",
    "4576584932834"
  ]
}
  const wrapper = shallow(<RandomNumber {...props} />);
  expect(wrapper).toMatchSnapshot();
});
