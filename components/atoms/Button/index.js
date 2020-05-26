import React from 'react';
import PropTypes from 'prop-types';
import { Button as AButton } from 'antd';

const Button = props => {
    return <AButton {...props}>{props.children}</AButton>;
};

Button.defaultProps = {
    type: 'primary',
    children: '',
};

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.string,
    onClick: PropTypes.func,
    htmlType: PropTypes.string,
};

export default Button;
