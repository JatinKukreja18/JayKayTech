import './banner.scss';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Row, Col } from 'antd';
import { Title, Text } from 'components/atoms';

function Banner(props) {
    return (
        <div className="new-banner-wrapper">
            <div className="container ">
                <Row gutter={20} className="banner-content-row" align="middle">
                    <Col sm={14} md={10}>
                        <div className="banner-content">
                            <Title className="banner-title" tag="h1">
                                <span className="subtext-banner">
                                    Welcome To
                                </span>
                                Shree Ghatkopar Vagad Visa Oswal
                            </Title>
                            <Text weight="600" spacing="lg">
                                We are at a mission to develop a healthy kuttchi
                                community and had served it's members since last
                                34 years.
                                <br />
                                <br />
                                Join us to be a part of our journey. Let's grow
                                together!
                            </Text>

                            <Button
                                type="primary"
                                onClick={() =>
                                    props.history.push('/registerIntro')
                                }
                                className="banner-cta">
                                Register
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default withRouter(Banner);
