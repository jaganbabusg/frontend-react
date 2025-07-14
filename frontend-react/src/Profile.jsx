import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useLocation } from 'wouter';
import { useFlashMessage } from "./FlashMessageStore";
import { useJWT } from './UserStore';

export default function Profile() {
  const [location, setLocation] = useLocation();
  const { showFlashMessage } = useFlashMessage();
  const { getJWT, setJWT } = useJWT();
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
        setInitialValues({ ...response.data });
      }
      fetchData();
    }
  }, []);
  // Formik validation schema
  const validationSchema = Yup.object({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last Name is required'),
    mobile: Yup.string().required('Mobile number is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    addresses: Yup.array().of(
      Yup.object({
        unit_no: Yup.string().required('Unit No. is required'),
        address_line_1: Yup.string().required('Block No. is required'),
        address_line_2: Yup.string().required('Street Name is required'),
        postal_code: Yup.string().required('Postal code is required')
      })
    )
  });
  // Form Update handler
  const handleSubmit = async (values) => {
    if (!token) {
      showFlashMessage('You must be logged in to update your profile.', 'danger');
      setLocation('/login');
    } else {
      await axios.put(import.meta.env.VITE_API_URL + '/api/user/rud', values, {
        headers: { Authorization: `Bearer ${token}` }
      }).catch(function (e) {
        showFlashMessage('Please login again.', 'danger');
        setLocation('/');
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
        axios.delete(import.meta.env.VITE_API_URL + '/api/user/rud', {
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
            <hr />
            <h5>Addresses</h5>
            {formik.values.addresses && formik.values.addresses.map((address, index) => (
              <div key={index} className="border p-3 mb-3">
                <div className="mb-3">
                  <label htmlFor={`addresses.${index}.unit_no`} className="form-label">Unit No</label>
                  <Field id={`addresses.${index}.unit_no`} name={`addresses.${index}.unit_no`} type="text" className="form-control" />
                  {formik.errors.addresses && formik.errors.addresses[index] && formik.errors.addresses[index].unit_no && (
                    <div className="text-danger">{formik.errors.addresses[index].unit_no}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor={`addresses.${index}.address_line_1`} className="form-label">Address Line 1</label>
                  <Field id={`addresses.${index}.address_line_1`} name={`addresses.${index}.address_line_1`} type="text" className="form-control" />
                  {formik.errors.addresses && formik.errors.addresses[index] && formik.errors.addresses[index].address_line_1 && (
                    <div className="text-danger">{formik.errors.addresses[index].address_line_1}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor={`addresses.${index}.address_line_2`} className="form-label">Address Line 2</label>
                  <Field id={`addresses.${index}.address_line_2`} name={`addresses.${index}.address_line_2`} type="text" className="form-control" />
                  {formik.errors.addresses && formik.errors.addresses[index] && formik.errors.addresses[index].address_line_2 && (
                    <div className="text-danger">{formik.errors.addresses[index].address_line_2}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor={`addresses.${index}.postal_code`} className="form-label">Postal Code</label>
                  <Field id={`addresses.${index}.postal_code`} name={`addresses.${index}.postal_code`} type="text" className="form-control" />
                  {formik.errors.addresses && formik.errors.addresses[index] && formik.errors.addresses[index].postal_code && (
                    <div className="text-danger">{formik.errors.addresses[index].postal_code}</div>
                  )}
                </div>
                <button type="button" className="btn btn-danger" onClick={() => {
                  const newAddresses = formik.values.addresses.filter((_, i) => i !== index);
                  formik.setFieldValue('addresses', newAddresses);
                }} disabled={formik.values.addresses.length === 1}>
                  Remove Address
                </button>
              </div>
            ))}
            <button type="button" className="btn btn-secondary mb-3" onClick={() => {
              const newAddress = {
                unit_no: '',
                address_line_1: '',
                address_line_2: '',
                postal_code: ''
              };
              formik.setFieldValue('addresses', [...formik.values.addresses, newAddress]);
            }}>
              Add Address
            </button>
            <hr />
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
