import React from 'react';
import Header from '../components/Header';
import { shallow } from 'enzyme';

describe('Header: ', () => {
  beforeEach(() => {
    // const wrapper = shallow(<Header />);
  });

  afterEach(() => {
    jest.resetModules();
    // wrapper.unmount();
  });

  it('renders items without errors', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find('nav').length).toEqual(1);
      expect(wrapper).toMatchSnapshot();
    })

})