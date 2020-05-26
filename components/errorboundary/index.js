import React, { Component } from 'react';
import './errorboundary.scss';
import { Row, Col } from 'antd';
import { Title, Button, Text, Sprite } from 'components/atoms';

export default class ErrorBoundary extends Component {
    state = { hasError: false, error: null, errorInfo: null, reload: false };

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    onReload = () => {
        this.setState({ ...this.state, hasError: false });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="container mt40 mb40">
                    <div className="commonErrorPages errorPage">
                        <Row gutter={[20, 20]}>
                            <Col className="error-col-1" md={10} xs={24}>
                                <div className="center-div">
                                    <h3 className="pageTitle">Page Crashed</h3>
                                    <Title>Oh Snap! Something broke</Title>
                                    <Text>
                                        Click on restore to reload this page.
                                    </Text>
                                    <div className="restoreBtn">
                                        <Button onClick={this.onReload}>
                                            Restore
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                            <Col className="error-col-2" md={14} xs={24}>
                                <div className="Img404">
                                    <Sprite
                                        id="error"
                                        width={500}
                                        height={258}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
