import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useLocation } from 'wouter';
import { useFlashMessage } from './FlashMessageStore';
import { useJWT } from './UserStore';

export default function Login() {
  const [_, setLocation] = useLocation();
  const { showFlashMessage } = useFlashMessage();
  const { setJWT } = useJWT();
  const initialValues = {
    'email': '',
    'password': ''
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required()
  });
  const onSubmit = async (values, formikHelpers) => {
    try {
      const response = await axios.post(import.meta.env.VITE_API_URL + '/api/user/login', values);
      setJWT(response.data.token);
      showFlashMessage('Login successful', 'success');
      setLocation('/');

    } catch (e) {
      showFlashMessage('Login failed', 'danger');
    } finally {
      formikHelpers.setSubmitting(false);
    }
  };

  return (<>
    <div className="container mt-5 mb-5" style={{ maxWidth: '400px' }}>
      <h3 className="text-center mb-4">Login</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {
          function (formik) {
            return (
              <Form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <Field type="email" id="email" name="email" className="form-control" />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <Field type="password" id="password" name="password" className="form-control" />
                  <ErrorMessage name="password" component="div" className="text-danger" />
                </div>
                <button type="submit"
                  className="btn btn-primary w-100"
                  disabled={formik.isSubmitting}>
                  {formik.isSubmitting ? 'Logging in...' : 'Login'}
                </button>
              </Form>
            )
          }
        }
      </Formik>
    </div>
  </>
  );
}