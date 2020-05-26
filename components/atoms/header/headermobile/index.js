import './index.scss';
import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const navigations = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'About us',
        path: '/about-us',
    },
    {
        title: 'Events',
        path: '/events',
    },
    {
        title: 'Gallery',
        path: '/events',
    },
    {
        title: 'Contact us',
        path: '/contact-us',
    },
    {
        title: 'Donation',
        path: '/donate',
    },
    {
        title: 'Register',
        path: '/register',
    },
];
function HeaderMobile(props) {
    const [hamburger, toggleHamburger] = useState(false);

    return (
        <div className="header-wrapper-mobile">
            <div className="header-mobile ">
                <div
                    className={`mobile-menu-container ${
                        hamburger ? 'open' : ''
                    }`}>
                    <ul className="menu-list">
                        {navigations.map((item, i) => (
                            <li
                                key={item.title}
                                style={{
                                    backgroundColor:
                                        props.location.pathname === item.path
                                            ? 'red'
                                            : '#FFF',
                                }}>
                                <NavLink
                                    onClick={() => toggleHamburger(!hamburger)}
                                    tabIndex={i}
                                    to={item.path}
                                    className="menu-link">
                                    <span>{item.title}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="top-header">
                    <div
                        onClick={() => toggleHamburger(!hamburger)}
                        className={`hamMenu ${hamburger ? 'active' : ''}`}>
                        <svg viewBox="0 0 30 34">
                            <g
                                id="Symbols"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd">
                                <rect
                                    fill="#666666"
                                    x="0"
                                    y="0.62295082"
                                    width="30"
                                    height="3.93442623"
                                    rx="1.96721311"
                                />
                                <rect
                                    fill="#666666"
                                    x="0"
                                    y="9"
                                    width="30"
                                    height="3.93442623"
                                    rx="1.96721311"
                                />
                                <rect
                                    fill="#666666"
                                    x="0"
                                    y="17.3606557"
                                    width="30"
                                    height="3.93442623"
                                    rx="1.96721311"
                                />
                                <path
                                    d="M3.72021484,26.6015625 L5.81201172,31.8222656 L7.90380859,26.6015625 L8.99804688,26.6015625 L8.99804688,33 L8.15429688,33 L8.15429688,30.5083008 L8.23339844,27.8188477 L6.1328125,33 L5.48681641,33 L3.390625,27.8320312 L3.47412109,30.5083008 L3.47412109,33 L2.63037109,33 L2.63037109,26.6015625 L3.72021484,26.6015625 Z M14.1044922,30.0424805 L11.331543,30.0424805 L11.331543,32.3100586 L14.5527344,32.3100586 L14.5527344,33 L10.487793,33 L10.487793,26.6015625 L14.5087891,26.6015625 L14.5087891,27.2958984 L11.331543,27.2958984 L11.331543,29.3525391 L14.1044922,29.3525391 L14.1044922,30.0424805 Z M20.5205078,33 L19.6723633,33 L16.4511719,28.0693359 L16.4511719,33 L15.6030273,33 L15.6030273,26.6015625 L16.4511719,26.6015625 L19.6811523,31.5541992 L19.6811523,26.6015625 L20.5205078,26.6015625 L20.5205078,33 Z M26.5234375,26.6015625 L26.5234375,30.9521484 C26.5205078,31.5556671 26.3308124,32.0493145 25.9543457,32.4331055 C25.577879,32.8168965 25.067386,33.0322263 24.4228516,33.0791016 L24.1987305,33.0878906 C23.4985317,33.0878906 22.9404318,32.8989277 22.5244141,32.5209961 C22.1083964,32.1430645 21.897461,31.6230502 21.8916016,30.9609375 L21.8916016,26.6015625 L22.7265625,26.6015625 L22.7265625,30.9345703 C22.7265625,31.3974633 22.8540026,31.7570788 23.1088867,32.0134277 C23.3637708,32.2697767 23.7270484,32.3979492 24.1987305,32.3979492 C24.6762719,32.3979492 25.0417468,32.2705091 25.295166,32.015625 C25.5485853,31.7607409 25.675293,31.4018578 25.675293,30.9389648 L25.675293,26.6015625 L26.5234375,26.6015625 Z"
                                    id="Menu"
                                    fill="#333333"
                                />
                            </g>
                        </svg>
                    </div>
                    <div className="mobMenu">
                        <NavLink to="/">
                            <img src="assets/images/logo.jpg" alt="logo" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

HeaderMobile.propTypes = {
    history: PropTypes.any,
};

export default withRouter(HeaderMobile);
