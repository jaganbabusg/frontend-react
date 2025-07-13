import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useLocation } from 'wouter';
import { useFlashMessage } from "./FlashMessageStore";
import { useJWT } from "./UserStore";
import axios from 'axios';

export default function Profile() {
  const [location, setLocation] = useLocation();
  const { showFlashMessage } = useFlashMessage();
  const [getJWT, setJWT] = useJWT();
  const [initialValues, setInitialValues] = useState({});
  const token = getJWT();
  // Check if the user is logged in and fetch their profile data
  useEffect(() => {
    if (!token) {
      showFlashMessage('You must be logged in to view this page.', 'danger');
      setLocation('/login');
    } else {
      const fetchData = async () => {
        const response = await axios.get(import.meta.env.VITE_API_URL + '/api/user/rud', {
          headers: { Authorization: `Bearer ${token}` }
        }).catch(function (e) {
          showFlashMessage('Please login again.', 'danger');
          setLocation('/login');
        });
        setInitialValues({ ...response.data.user });
        console.log(response.data.user);
      }
      fetchData();
    }
  }, []);
  // Formik validation schema
  const validationSchema = Yup.object({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last Name is required'),
    date_of_birth: Yup.date().required('Date of Birth is required'),
    mobile: Yup.string().required('Mobile number is required'),
    email: Yup.string().email('Invalid email address').required('Email is required')
  });
  // Form Update handler
  const handleSubmit = async (values, { formikHelpers }) => {
    if (!token) {
      showFlashMessage('You must be logged in to update your profile.', 'danger');
      setLocation('/login');
    } else {
      const response = await axios.put(import.meta.env.VITE_API_URL + '/api/user/rud', values, {
        headers: { Authorization: `Bearer ${token}` }
      }).catch(function (e) {
        showFlashMessage('Please login again.', 'danger');
        setLocation('/login');
      });
      showFlashMessage('Profile updated successfully!', 'success');
    }
  }
  // Form Delete handler
  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');
    if (confirmDelete) {
      if (!token) {
        showFlashMessage('You must be logged in to delete your account.', 'danger');
        setLocation('/login');
      } else {
        await axios.delete(import.meta.env.VITE_API_URL + '/api/user/rud', {
          headers: { Authorization: `Bearer ${token}` }
        }).catch(function (e) {
          showFlashMessage('Please login again.', 'danger');
          setLocation('/login');
        });
        showFlashMessage('Account deleted successfully.', 'success');
        setJWT(null);
        setLocation('/login');
      }
    }
  }
  return (
    <div className="container mt-5 mb-3" style={{ maxWidth: '400px' }}>
      <h2>User Profile</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {(formik) => (
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
              <label htmlFor="date_of_birth" className="form-label">Date of Birth</label>
              <Field id="date_of_birth" name="date_of_birth" type="date" className="form-control" />
              {formik.errors.date_of_birth && formik.touched.date_of_birth && (
                <div className="text-danger">{formik.errors.date_of_birth}</div>
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





            <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>
              {formik.isSubmitting ? 'Updating...' : 'Update Profile'}
            </button>
            <button type="button" className="btn btn-danger ms-2" onClick={handleDelete}>
              Delete Account
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
