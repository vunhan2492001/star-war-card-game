import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './index.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
interface FormData {
    username: string;
    gender: string;
}

const UserForm = () => {
    const navigate = useNavigate();
    const initialValues: FormData = {
        username: '',
        gender: '',
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required!'),
        gender: Yup.string().required('Gender is required!'),
    });

    const handleSubmit = (values: FormData) => {
        console.log('Form data submitted:', values);
        navigate('/game');
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}

        >
            <Form className='form'>
                <h1 className='header'>Welcome to The Star Wars Thuc Khue</h1>
                <div className='my-user-container'>
                    <div className="form-field">

                        {/* Sử dụng Field thay cho input */}
                        <Field className="name" type="text" id="name" name="username" placeholder="Enter your name" required />
                        {/* Sử dụng ErrorMessage thay cho div */}
                        <ErrorMessage name="username" component="div" className="error" />

                    </div>
                    <div className="form-field">
                        <label >
                            <Field className='my-user-select' as="select" name="gender">
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </Field>
                            <ErrorMessage name="gender" component="div" className="error" />
                        </label>
                    </div>
                    <div className="form-field">
                        <Button type='submit' variant="danger">Play</Button>{' '}
                    </div>
                </div>

            </Form>
        </Formik>
    );
};

export default UserForm;