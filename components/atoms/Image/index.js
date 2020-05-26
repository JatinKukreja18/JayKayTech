import React from 'react';
import PropTypes from 'prop-types';

const Image = props => {
    return (
        <div className={props.containerClass}>
            <img src={props.src} alt={props.children} />
        </div>
    );
};

Image.defaultProps = {
    children: '',
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    containerClass: PropTypes.string,
};

export default Image;
