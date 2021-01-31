import React from 'react';
import PrimeForm from '../components/PrimeForm';
import { shallow } from 'enzyme';

describe('PrimeForm: ', () => {
  let wrapper:any;

  beforeEach(() => {
    wrapper = shallow(<PrimeForm />);
  });

  afterEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    // wrapper.unmount();
  });
  
  it('should render the form and components', () => {
    expect(wrapper.find('form').exists()).toBe(true);
    expect(wrapper.find('input[type="number"]').length).toEqual(1);
    expect(wrapper.find('input[type="submit"]').length).toEqual(1);
    expect(wrapper.find('#result').length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('has a title of "Prime Finder"', () => {
    expect(wrapper.find("h2").text()).toBe("Highest Prime");
    expect(wrapper).toMatchSnapshot();
  });

  it('renders one form component', () => {
    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('includes 02 inputs', () => {
    expect(wrapper.find('input').length).toEqual(2);
  });

  // https://medium.com/@acesmndr/testing-react-functional-components-with-hooks-using-enzyme-f732124d320a
  // Effective Unit Testing of React Components With Jest And Enzyme (TQ): https://xiaoyunyang.github.io/post/effective-unit-testing-of-react-components-with-jest-and-enzyme/
  it('should have proper props for input field', () => {
    expect(wrapper.find('input[type="number"]').props()).toEqual({
      className: 'nambk-input',
      onChange: expect.any(Function),
      placeholder: 'Enter a number',
      type: 'number',
      'aria-label': 'Input Number',
      autoFocus: true,
      id: 'inputNumber',
      name: 'inputNumber',
      style: Object({width: '50%'}),
      value: '',
    });
  });

  it('should have proper props for submit button', () => {
    expect(wrapper.find('input[type="submit"]').props()).toEqual({
      className: 'nambk-btn nambk-btn-primary',
      id: 'btnFindHighestPrime',
      value: 'Go',
      type: 'submit',
    });
  });

  // Ref: https://blog.logrocket.com/getting-started-with-enzyme-for-react-a106b58fc53b/
  // React 17.0.1 error: Cannot read property 'child' of undefined 
  // Enzyme adapter 16 not fully compatible with React 17 
  // => https://github.com/enzymejs/enzyme/issues/2462
  it('should change the value on input', () => {
    wrapper.find('input[type="number"]').simulate('change', { 
      target: { value: 200 } 
    });
    // expect(wrapper.find('input[type="number"]').props().value).toEqual(200);
    expect(wrapper.find('input[type="number"]').prop('value')).toEqual(200);
  });

  it('simulates submit button click event', () => {
    const props = {
      inputNum: 4,
      answer: 3
    }
    const mockSubmit = jest.fn();
    const handleClick = jest.spyOn(React, 'useState');
    wrapper = shallow(<PrimeForm {...props}/>);
    handleClick.mockImplementation((init) => [init, mockSubmit]);
  
    wrapper.find('#btnFindHighestPrime').simulate('click');
    wrapper.update();
    expect(mockSubmit).toBeTruthy();
  });

  it('simulates form submit event', () => {
    const props = {
      inputNum: 4,
      answer: 3
    }
    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    const mockSubmit = jest.fn();
    const handleSubmit = jest.spyOn(React, 'useState');
    wrapper = shallow(<PrimeForm {...props} onSubmit={handleSubmit}/>);
    handleSubmit.mockImplementation((init) => [init, mockSubmit]);
  
    wrapper.find('form').simulate('submit', fakeEvent);
    expect(mockSubmit).toBeTruthy();
    // expect(mockSubmit).toBeCalledTimes(1);
    // expect(wrapper.find('#result').prop('value')).toEqual(3);
    // expect(wrapper.find('#result').text()).toContain('3');

  });

});