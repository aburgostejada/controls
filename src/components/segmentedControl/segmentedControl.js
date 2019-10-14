import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Option from './segmentedControlOption';

import './segmentedControl.scss';

const SegmentedControl = (props) => {
    const [selected, setSelected] = useState(props.selected);
    const { label, options, onSelected } = props;

    if(options.length < 2 || options.length > 10){
        throw(new Error(
            'Segmented Control was designed to have at least 2 and no more than 10 options.'
        ));
    }

    return (
        <div className='segmentedControl'>
            <label>{label}</label>
            <div className='optionsContainer'>
                {options.map((option) => <Option
                    key={option.value}
                    selected={selected === option.value}
                    onSelected={(value) => {
                        setSelected(value);
                        onSelected(value);
                    }}
                    {...option}
                />)}
            </div>
        </div>
    );
};

SegmentedControl.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onSelected: PropTypes.func.isRequired,
    selected: PropTypes.string
};

export default SegmentedControl;