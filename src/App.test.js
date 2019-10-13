import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import renderer from 'react-test-renderer';
import SegmentedControl from "./components/segmentedControl/segmentedControl";


describe('<App />', () => {
  it('renders base segmented control demo.', () => {
    const wrapper = shallow(<App />);
    const welcome = 'Segmented Control';
    expect(wrapper.contains(welcome)).toEqual(true);
  });
});


describe('<SegmentedControl />', () => {
  it('should throw error if the options are less than two', () => {
    try{
       shallow(<SegmentedControl label="test" onSelected={() => {}} options={[]} />);
    }catch (e) {
      expect(e).toEqual(expect.any(Error))
    }
  });

  it('should throw error if the options are more than ten', () => {
    const option = {value: "hi", label: 'Hi'};
    const options= [option,option,option,option,option,option,option,option,option,option];
    try{
      shallow(<SegmentedControl label="test" onSelected={() => {}} options={options} />);
    }catch (e) {
      expect(e).toEqual(expect.any(Error))
    }
  });
});