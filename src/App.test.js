import React from 'react';
import { shallow, mount  } from 'enzyme';
import sinon from 'sinon';
import App from './App';
import SegmentedControl from "./components/segmentedControl/segmentedControl";
import SegmentedControlOption from "./components/segmentedControl/SegmentedControlOption";

const validOptions = [
    {value: "valid_option", label: 'Valid Option'},
    {value: "valid_option_b", label: 'Valid Option B'},
    {value: "valid_option_c", label: 'Valid Option C'}
];

const validLabel = "This is a valid Label";
const validDescription = "Valid Description";
const validOption = "valid_option";


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
    const option = {value: validOption, label: 'Valid Option'};
    const options= [option,option,option,option,option,option,option,option,option,option];
    try{
      shallow(<SegmentedControl label="test" onSelected={() => {}} options={options} />);
    }catch (e) {
      expect(e).toEqual(expect.any(Error))
    }
  });

  it('should have the correct label ', () => {
    const wrapper = shallow(<SegmentedControl label={validLabel} onSelected={() => {}} options={validOptions} />);
    expect(wrapper.contains(<label>{validLabel}</label>)).toEqual(true);
  });

  it('should have the correct number of options', () => {
    const wrapper = mount(<SegmentedControl label={validLabel} onSelected={() => {}} options={validOptions} />);
    expect(wrapper.find('.option')).toHaveLength(validOptions.length);
  });

  it('should call onSelected when option is clicked', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(<SegmentedControl label={validLabel} onSelected={onButtonClick} options={validOptions} />);
    wrapper.find('.option').first().simulate('click');
    expect(onButtonClick).toHaveProperty('callCount', 1);
  });

  it('should set option as selected after clicked', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(<SegmentedControl label={validLabel} onSelected={onButtonClick} options={validOptions} />);
    const firstOption = wrapper.find('.option').first();
    firstOption.simulate('click');
    const selected = wrapper.find('.selected');
    expect(selected.text()).toEqual(firstOption.text());
  });
});

describe('<SegmentedControlOption />', () => {
  it('should have the correct label ', () => {
    const wrapper = shallow(
        <SegmentedControlOption
            label={validLabel}
            onSelected={() => {}}
            value={validOption}
            description={validDescription}
        />
    );
    expect(wrapper.text()).toEqual(validLabel);
  });

  it('should have be marked as selected ', () => {
    const wrapper = mount(
        <SegmentedControlOption
            label={validLabel}
            selected={true}
            onSelected={() => {}}
            value={validOption}
            description={validDescription}
        />
    );
    expect(wrapper.getDOMNode().classList.contains('selected')).toEqual(true);
  });

  it('should have the correct title when passed ', () => {
    const wrapper = mount(
        <SegmentedControlOption
            label={validLabel}
            onSelected={() => {}}
            value={validOption}
            description={validDescription}
        />
    );
    expect(wrapper.getDOMNode().title).toEqual(validDescription);
  });

  it('should have the correct title when not passed ', () => {
    const wrapper = mount(
        <SegmentedControlOption
            label={validLabel}
            onSelected={() => {}}
            value={validOption}
        />
    );
    expect(wrapper.getDOMNode().title).toEqual(validLabel);
  });

  it('should call onSelected when option is clicked width proper value', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(<SegmentedControlOption
        label={validLabel}
        onSelected={onButtonClick}
        value={validOption}
        description={validDescription}
    />);
    wrapper.simulate('click');
    expect(onButtonClick).toHaveProperty('callCount', 1);
    expect(onButtonClick.args[0][0]).toEqual(validOption);
  });
});