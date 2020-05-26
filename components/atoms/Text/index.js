import React from 'react';
import PropTypes from 'prop-types';
import './text.module.scss';
const Text = props => {
    return (
        <p
            {...props}
            className={`text ${props.spacing ? props.spacing : ''} ${props.theme ||
                'dark'} ${props.align ? props.align : ''} ${
                props.capitalize ? 'capitalize' : ''
            }`}
            style={{ fontWeight: props.weight }}>
            {props.children}
        </p>
    );
};

Text.defaultProps = {
    children: '',
};

Text.propTypes = {
    children: PropTypes.any.isRequired,
    spacing: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'none']),
    align: PropTypes.oneOf(['left', 'right', 'center']),
    theme: PropTypes.oneOf(['red', 'light', 'dark']),
};

export default Text;
