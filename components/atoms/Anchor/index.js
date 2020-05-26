import React from 'react';
import PropTypes from 'prop-types';

const Anchor = props => {
    return (
        <a target="_blank" rel="noopener noreferrer" {...props}>
            {props.children}
        </a>
    );
};

Anchor.defaultProps = {};

Anchor.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

export default Anchor;
