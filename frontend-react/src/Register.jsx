import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useLocation } from 'wouter';
import { useFlashMessage } from './FlashMessageStore';
import axios from 'axios';

export default function Register() {
  const { showFlashMessage } = useFlashMessage();
  const [_, setLocation] = useLocation();
  const initialValues = {
    'first_name': '',
    'last_name': '',
    'mobile': '',
    'email': '',
    'password': '',
    addresses: []
  };
  const validationSchema = Yup.object({
    first_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
    mobile: Yup.string().matches(/^\d{8}$/, 'Must be a valid 8-digit mobile number').required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required')
  });
  const onSubmit = async (values, formikHelpers) => {
    try {
      values.addresses = []; // Initialize addresses as an empty array
      const response = await axios.post(import.meta.env.VITE_API_URL + '/api/user/register', values);
      if (response.status == 200){
        showFlashMessage('Registration successful!', 'success');
        setLocation('/login');
      }
    } catch (e) {
        showFlashMessage('Registration Failed.', 'danger');
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };
  return (
    <div className="container mt-5 mb-3" style={{ maxWidth: '400px' }}>
      <h2>Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {( formik ) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="first_name" className="form-label">First Name</label>
              <Field id="first_name" name="first_name" type="text" className="form-control" />
              {formik.errors.first_name && formik.touched.first_name && (
                <div className="text-danger">{formik.errors.first_name}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="last_name" className="form-label">Last Name</label>
              <Field id="last_name" name="last_name" type="text" className="form-control" />
              {formik.errors.last_name && formik.touched.last_name && (
                <div className="text-danger">{formik.errors.last_name}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">Mobile</label>
              <Field id="mobile" name="mobile" type="text" className="form-control" />
              {formik.errors.mobile && formik.touched.mobile && (
                <div className="text-danger">{formik.errors.mobile}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <Field id="email" name="email" type="email" className="form-control" />
              {formik.errors.email && formik.touched.email && (
                <div className="text-danger">{formik.errors.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <Field id="password" name="password" type="password" className="form-control" />
              {formik.errors.password && formik.touched.password && (
                <div className="text-danger">{formik.errors.password}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <Field id="confirmPassword" name="confirmPassword" type="password" className="form-control" />
              {formik.errors.confirmPassword && formik.touched.confirmPassword && 
                <div className="text-danger">{formik.errors.confirmPassword}</div>
              }
            </div>
            <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>
              {formik.isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}