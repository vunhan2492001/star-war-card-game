import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './index.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

interface FormData {
    username: string;
    gender: string;
}

const UserForm = () => {
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
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}

        >
            <Form className='form'>
                <h1 className='header'>Welcome to The Start Wars</h1>
                <div className='container'>
                    <div className="form-field">
                        <label>
                            Username:
                            <Field type="text" name="username" />
                            <ErrorMessage name="username" component="div" className="error" />
                        </label>
                    </div>
                    <div className="form-field">
                        <label>
                            Gender:
                            <Field as="select" name="gender">
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </Field>
                            <ErrorMessage name="gender" component="div" className="error" />
                        </label>
                    </div>
                    <div className="form-field">
                        <Button type='submit' variant="danger">Submit</Button>{' '}
                    </div>
                </div>

            </Form>
        </Formik>
    );
};

export default UserForm;