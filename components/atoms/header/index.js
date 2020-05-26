/* eslint-disable sort-vars */
import React from 'react';
import './header.scss';
import Menus from '../menu';
import Login from 'containers/login';
import { Row, Col, Modal } from 'antd';
import { Link } from 'react-router-dom';
export default class Header extends React.Component {
    state = {
        visible: false,
        current: 'home',
        scrolled: false,
        hamOpen: false,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = event => {
        const scrollTop = event.srcElement.scrollingElement.scrollTop;

        if (scrollTop > 50) {
            this.setState({
                scrolled: true,
            });
        } else {
            this.setState({
                scrolled: false,
            });
        }
    };
    toggleMenu = () => {
        console.log(window.innerWidth);

        if (window.innerWidth <= 991) {
            this.setState({ hamOpen: !this.state.hamOpen });
        }
    };
    render() {
        return (
            <div className="header-container">
                <div
                    className={`${
                        this.state.scrolled ? 'scrolled' : ''
                    } mainHeader fixed`}>
                    <div
                        className={`${
                            this.state.isSticky ? 'sticky' : ''
                        } container`}
                        style={{ paddingBottom: '0px' }}>
                        <Row
                            type="flex"
                            className="header-row"
                            justify="space-between"
                            align="middle">
                            <Col>
                                <div className="logo">
                                    <Link to="/">
                                        <img
                                            className="desktop-logo"
                                            src="assets/images/output-onlinepngtools.png"
                                            alt=""
                                        />
                                    </Link>
                                    <Link to="/">
                                        <img
                                            className="mobile-logo"
                                            src="assets/images/logo.jpg"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                            </Col>
                            <Col>
                                <Menus
                                    active={this.state.hamOpen}
                                    changed={this.toggleMenu}
                                />
                                <a
                                    className={`header-hamburger-link ${
                                        this.state.hamOpen ? 'active' : ''
                                    }`}
                                    onClick={this.toggleMenu}>
                                    <span className="header-hamburger-icon"></span>
                                </a>
                            </Col>
                        </Row>
                    </div>
                </div>

                <Modal
                    title="Login"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    <Login />
                </Modal>
            </div>
        );
    }
}
