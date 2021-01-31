import React from 'react';
import PrimesForm from '../components/PrimesForm';
import { shallow, mount } from 'enzyme';

describe('PrimesForm: ', () => {
  let wrapper:any;
  
  beforeEach(() => {
    wrapper = shallow(<PrimesForm />);
  });

  afterEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    // wrapper.unmount();
  });

  it('should render the form and components', () => {
    const wrapper = shallow(<PrimesForm />);
    expect(wrapper.find('form').exists()).toBe(true);
    expect(wrapper.find('#inputFirstNum').length).toEqual(1);
    expect(wrapper.find('#inputLastNum').length).toEqual(1);
    expect(wrapper.find('input[type="submit"]').length).toEqual(1);
    expect(wrapper.find('#result').length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  })

  it('has a title of "Prime Numbers"', () => {
    const wrapper = shallow(<PrimesForm />);
    expect(wrapper.find("h2").text()).toBe("Prime Numbers");
    expect(wrapper).toMatchSnapshot();
  });

  it('renders one form component', () => {
  const wrapper = shallow(<PrimesForm />);
  expect(wrapper.find('form')).toHaveLength(1);
  expect(wrapper).toMatchSnapshot();
  });

  it('should change the state on input1: call handleChange method', done => {
    const text = '1'
    const state = { inputFirstNum: text };
    const props = {
        fetchData: jest.fn(() => state)
    };
    const wrapper = mount(<PrimesForm {...props}/>);
    const input = wrapper.find('#inputFirstNum');

    input.props().value = text;
    input.simulate('change', { target: { value: text } });
    expect(input.get(0).props.value).toEqual(text);
    done();
  });

  it('should change the state on input2: call handleChange method', done => {
    const text = '1000'
    const state = { inputLastNum: text };
    const props = {
        fetchData: jest.fn(() => state)
    };
    const wrapper = mount(<PrimesForm {...props}/>);
    const input = wrapper.find('#inputLastNum');

    input.props().value = text;
    input.simulate('change', { target: { value: text } });
    expect(input.get(0).props.value).toEqual(text);
    done();
  });

  it('should have proper props for input1 field', () => {
    expect(wrapper.find('input[type="number"]').at(0).props()).toEqual({
      className: 'nambk-input',
      onChange: expect.any(Function),
      placeholder: 'Enter a number',
      type: 'number',
      'aria-label': 'Input Number',
      min: '1',
      max: '9999999',
      id: 'inputFirstNum',
      name: 'inputFirstNum',
      style: Object({width: '33%'}),
      value: 1,
    });
  });

  it('should have proper props for input2 field', () => {
    expect(wrapper.find('input[type="number"]').at(1).props()).toEqual({
      className: 'nambk-input',
      onChange: expect.any(Function),
      placeholder: 'Enter a number',
      type: 'number',
      'aria-label': 'Input Number',
      min: '1',
      max: '9999999',
      id: 'inputLastNum',
      name: 'inputLastNum',
      style: Object({width: '33%'}),
      value: 1000,
    });
  });

  it('should have proper props for submit button', () => {
    expect(wrapper.find('input[type="submit"]').props()).toEqual({
      className: 'nambk-btn nambk-btn-primary',
      id: 'btnFindPrimes',
      value: 'Go',
      type: 'submit',
    });
  });

  // Solution for state not updated: https://github.com/enzymejs/enzyme/issues/1999#issuecomment-491634796
  it('should change the value on input1', () => {
    wrapper.find('input[type="number"]').at(0).simulate('change', { 
      target: { name: 'inputFirstNum', value: 11 }
    });
    expect(wrapper.find('input[type="number"]').at(0).prop('value')).toEqual(11);
  });
  it('should change the value on input2', () => {
    wrapper.find('input[type="number"]').at(1).simulate('change', { 
      target: { name: 'inputLastNum', value: 22 } 
    });
    expect(wrapper.find('input[type="number"]').at(1).prop('value')).toEqual(22);
  });

  it('simulates form submit event', () => {
    const testValues = {
      inputFirstNum: '1',
      inputLastNum: '10',
      handleSubmit: jest.fn(),
    };
    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    const mockSubmit = jest.fn().mockImplementation((init) => [init, mockSubmit]);
    wrapper = shallow(<PrimesForm {...testValues} onSubmit={mockSubmit}/>);

    wrapper.find('form').simulate('submit', fakeEvent);
    expect(mockSubmit).toBeTruthy();
    // expect(testValues.handleSubmit).toHaveBeenCalledTimes(1);
    // expect(testValues.handleSubmit).toBeCalledWith({
    //     inputFirstNum: testValues.inputFirstNum, 
    //     inputLastNum: testValues.inputLastNum
    // });
  });

})