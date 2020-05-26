import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './footer.scss';
const QuickLinks = props => (
    <div className="content-container">
        <div className="quickLinksSection">
            {props.title ? <h3>{props.title}</h3> : null}
            <ul className="quickLinks">
                {props.data.map((item, key) => (
                    <li key={key}>
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);
QuickLinks.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
};

export default QuickLinks;
