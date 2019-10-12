import PropTypes from 'prop-types';
import React, { useState } from 'react';
import classNames from 'classnames';
import './segmentedControl.scss';

const SegmentedControlOption = (props) => {
    const { value, label, selected, onSelected } = props;
    const isSelected = selected === value;
    const classes = classNames('option',{
        'selected': isSelected
    });

    return (
        <span className={classes} onClick={() => onSelected(value)}>
            {label}
        </span>
    );
};

SegmentedControlOption.propsTypes = {
    onSelected: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

const SegmentedControl = (props) => {
    const [selected, setSelected] = useState(props.selected);
    const { label, options, onSelected } = props;


    return (
        <div className='segmentedControl'>
            <label>{label}</label>
            <div className='optionsContainer'>
                {options.map((option) => <SegmentedControlOption
                    key={option.value}
                    selected={selected}
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