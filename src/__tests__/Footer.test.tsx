import React from 'react';
import Footer from '../components/Footer';
import { shallow } from 'enzyme';

describe('Footer', () => {
  const logoImageAlt = 'Landing Page Logo';
  const props = {
    theme: '',
    toggleTheme: jest.fn()
  }
  beforeEach(() => {
    // const wrapper = mount(<Footer />);
  });

  afterEach(() => {
    jest.resetModules();
    // wrapper.unmount();
  });

  it('renders nav items without errors', () => {
    const wrapper = shallow(<Footer {...props}/>);
    expect(wrapper.find('div.container').length).toEqual(1);
    expect(wrapper.find('span.h5').length).toEqual(1);
    expect(wrapper.find('#btnDarkModeFooter').length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

  // Ref: https://stackoverflow.com/questions/43747397/simulate-a-button-click-in-jest
  it('simulates DarkMode button click event', () => {
    const mockDarkMode = jest.fn();
    const wrapper = shallow(<Footer {...props} toggleTheme={mockDarkMode}/>);
    wrapper.find('button').simulate('click');
    expect(mockDarkMode).toHaveBeenCalled();
  });

  it('should change DarkMode icon to Sun', () => {
    const mockDarkMode = jest.fn();
    const theme = 'light';
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation((init) => [init, mockDarkMode]);
    const wrapper = shallow(<Footer {...props} theme={theme} toggleTheme={mockDarkMode}/>);

    wrapper.find('button').simulate('click');
    // console.log(wrapper.debug());
    expect(mockDarkMode).toHaveBeenCalled();
    expect(wrapper.find('i').last().prop('className')).toEqual('fa fa-sun-o');
  });

  it('should change DarkMode icon to Circle', () => {
    const mockDarkMode = jest.fn();
    const theme = 'dark';
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation((init) => [init, mockDarkMode]);
    const wrapper = shallow(<Footer theme={theme} toggleTheme={mockDarkMode}/>);

    wrapper.find('button').simulate('click');
    expect(mockDarkMode).toHaveBeenCalled();
    expect(wrapper.find('i').last().prop('className')).toEqual('fa fa-circle-o');
  });

  it('should change DarkMode icon to Moon', () => {
    const mockDarkMode = jest.fn();
    const theme = 'moon';
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation((init) => [init, mockDarkMode]);
    const wrapper = shallow(<Footer theme={theme} toggleTheme={mockDarkMode}/>);

    wrapper.find('button').simulate('click');
    expect(mockDarkMode).toHaveBeenCalled();
    expect(wrapper.find('i').last().prop('className')).toEqual('fa fa-moon-o');
  });

  // https://blog.logrocket.com/testing-state-changes-in-react-functional-components/
  it('should update state on DarkMode button clicked', () => {
    const mockDarkMode = jest.fn();
    const handleClick = jest.spyOn(React, 'useState');
    const wrapper = shallow(<Footer toggleTheme={mockDarkMode}/>);
    handleClick.mockImplementation(theme => [theme, mockDarkMode]);
 
    wrapper.find("#btnDarkModeFooter").simulate("click");
    expect(mockDarkMode).toBeTruthy();
  });

  it('renders img without errors', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('img').prop('alt')).toEqual(logoImageAlt);
    // expect(wrapper.find('img').getElement(0).props.src).toEqual(logoImage);
    // expect(wrapper.find('img').prop('src')).toEqual(logoImage);
    // expect(wrapper.find('img').props().src).toEqual(logoImage);
  });

})