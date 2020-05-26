import React from 'react';
import './footer.scss';
import { Row, Col } from 'antd';
import QuickLinks from './quicklinks';
import ContactusFooter from './contactusfooter';

const allMenus = [
    {
        title: 'home',
        path: '/',
    },
    {
        title: 'About us',
        path: '/about-us',
    },
    {
        title: 'events',
        path: '/events',
    },
    {
        title: 'Contact Us',
        path: '/contact-us',
    },
];

const userMenus = [
    {
        title: 'register',
        path: '/register',
    },
    {
        title: 'Donate',
        path: '/donate',
    },
];
const a = new Date();
const currentYear = a.getFullYear();
export default class Footer extends React.Component {
    render() {
        return (
            <div className="mainFooter">
                <div className="footer">
                    <div className="container">
                        <Row>
                            <Col
                                lg={18}
                                sm={12}
                                md={16}
                                xs={24}
                                className="footer-1">
                                <ContactusFooter />
                            </Col>
                            <Col
                                lg={3}
                                sm={6}
                                md={4}
                                xs={24}
                                className="footer-2">
                                <QuickLinks
                                    current={this.props.current}
                                    handleClick={this.props.handleClick}
                                    data={allMenus}
                                />
                            </Col>

                            <Col
                                lg={3}
                                sm={6}
                                md={4}
                                xs={24}
                                className="footer-3">
                                <QuickLinks data={userMenus} />
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className="bottomFooter">
                    <div className="container">
                        <Row
                            type="flex"
                            justify="space-between"
                            align="top"
                            className="bottomfooterrow">
                            <Col md={12} xs={24}>
                                <span>© copyright {currentYear} SGVVO</span>
                            </Col>
                            <Col md={12} xs={24}>
                                <span className="design">
                                    <span>Designed and developed by </span>{' '}
                                    <span>MaddFann</span>
                                </span>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}
