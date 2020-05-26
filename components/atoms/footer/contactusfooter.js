import React from 'react';
import PropTypes from 'prop-types';
import './footer.scss';
const ContactusFooter = props => (
    <div className="contact-links">
        {props.title ? <h3>{props.title}</h3> : null}

        <ul>
            <li>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="tel:+919820812120">
                    +91-9820812120
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:sgvvos@gmail.com">
                    sgvvos@gmail.com
                </a>
            </li>
        </ul>
    </div>
);
ContactusFooter.propTypes = {
    title: PropTypes.string,
};

export default ContactusFooter;
