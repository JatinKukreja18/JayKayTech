import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import Button from 'components/atoms/Button';

function ContactForm(props) {
    const [form] = Form.useForm();

    const onFinish = values => {
        props.onSubmit(values);
        form.resetFields();
    };

    return (
        <Form
            layout={'vertical'}
            form={form}
            name="contact-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}>
            <Form.Item
                name="username"
                label="Full Name"
                rules={[
                    {
                        required: true,
                        message: 'Please Enter Your Fullname..!',
                    },
                ]}>
                <Input />
            </Form.Item>
            <Form.Item
                name="to"
                label="Email ID"
                rules={[
                    {
                        required: true,
                        type: 'email',
                        message: 'Please Enter Your Email!',
                    },
                ]}>
                <Input />
            </Form.Item>
            <Form.Item
                name="subject"
                label="Subject"
                rules={[
                    { required: true, message: 'Please Enter Your Subject!' },
                ]}>
                <Input />
            </Form.Item>
            <Form.Item
                name="text"
                label="Message"
                rules={[
                    { required: true, message: 'Please Enter Your Message' },
                ]}>
                <Input.TextArea
                    className="message-textarea"
                    style={{
                        height: '100px',
                        fontSize: '16px',
                        resize: 'none',
                    }}
                />
            </Form.Item>
            <Button htmlType={'submit'}>Send</Button>
        </Form>
    );
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
