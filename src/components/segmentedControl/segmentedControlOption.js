import classNames from "classnames";
import PropTypes from "prop-types";
import React from 'react';

const SegmentedControlOption = (props) => {
    const { value, label, selected, onSelected, description } = props;
    const title = description ? description : label;
    const classes = classNames('option',{
        'selected': selected
    });

    return (
        <span title={title} className={classes} onClick={() => onSelected(value)}>
            {label}
        </span>
    );
};

SegmentedControlOption.propsTypes = {
    onSelected: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    description: PropTypes.string
};

export default SegmentedControlOption;