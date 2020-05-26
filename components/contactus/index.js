import './index.scss';
import 'containers/content/content.scss';
import React from 'react';
import { Row, Col } from 'antd';
import { Title, Image, Text, Anchor, IFrame, Sprite } from 'components/atoms';
import ContactForm from '../molecules/ContactForm';
import { useNotification } from 'hooks';
import { query } from './query';
import { ErrorBoundary } from 'components';

function Contactus() {
    const notification = useNotification({ placement: 'bottomRight' });

    async function onFormSubmit(body) {
        try {
            await query(body);
            notification.success({
                message: 'Message sent successfully!',
                description:
                    'Thank you for contacting us. We will get back soon.',
            });
        } catch (err) {
            notification.error({
                message: 'Unable to send message',
                description: 'Please check the entered details and try again.',
            });
        }
    }

    return (
        <ErrorBoundary>
            <div className="contact-us-container container main-top-spacing">
                <Row
                    type={'flex'}
                    justify={'space-between'}
                    gutter={20}
                    className="contact-us">
                    <Col xs={24} sm={24} md={10}>
                        <Title spacing="lg" tag="h2">
                            Connect with us
                        </Title>
                        <ContactForm onSubmit={onFormSubmit} />
                    </Col>
                    <Col xs={24} sm={24} md={10} lg={8}>
                        <Image
                            containerClass="contactImg"
                            src="assets/illustrations/contact.svg">
                            contact us
                        </Image>
                    </Col>
                </Row>
                <div className="reach-us">
                    <Title spacing="lg" tag="h2">
                        Reach out to us
                    </Title>
                    <ul className="contact-list">
                        <li>
                            <Sprite id="location" height={29} width={39} />
                            <Text>
                                204, Alpana Apt, 2nd Floor, LBS marg,
                                Ghatkopar(W)
                            </Text>
                        </li>
                        <li>
                            <Sprite id="mail" height={40} width={39} />
                            <Anchor href="mailto:sgvvos@gmail.com">
                                sgvvos@gmail.com
                            </Anchor>
                        </li>
                        <li>
                            <Sprite id="phone" height={22} width={39} />
                            <Anchor href="tel:+919820812120">
                                +91-9820812120
                            </Anchor>
                        </li>
                    </ul>
                </div>
            </div>
            <IFrame
                title="Sgvvo address"
                src="http://maps.google.com/maps?q=19.088290, 72.906638&z=15&output=embed"
                class="map"
                height="410px"
            />
        </ErrorBoundary>
    );
}
export default Contactus;
