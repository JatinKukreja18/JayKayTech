import React from 'react';
import PropTypes from 'prop-types';

const IFrame = props => {
    return (
        <div style={{ lineHeight: '0px' }} className={props.containerClass}>
            <iframe
                title={props.title}
                src={props.src}
                className={props.class}
                style={{ border: 0 }}
                height={props.height}
                width={props.width}
                loading={'lazy'}
            />
        </div>
    );
};

IFrame.defaultProps = {
    width: '100%',
    containerClass: '',
};

IFrame.propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    class: PropTypes.string,
    height: PropTypes.string.isRequired,
    width: PropTypes.string,
};

export default IFrame;
