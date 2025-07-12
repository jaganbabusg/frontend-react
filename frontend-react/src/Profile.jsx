import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { useLocation} from 'wouter';
import {useFlashMessage} from "./FlashMessageStore";
import {useJWT} from "./UserStore";
import axios from 'axios';

export default function Profile() {
  const [location, setLocation] = useLocation();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const {setFlashMessage} = useFlashMessage();
  const {jwt} = useJWT();

  useEffect(() => {
    axios.get('/api/profile', {headers: {Authorization: `Bearer ${jwt}`}})
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching profile:', error);
        setLoading(false);
      });
  }, [jwt]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h1>Profile</h1>
      <Formik
        initialValues={{ name: user.name || '', email: user.email || '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Name is required'),
          email: Yup.string().email('Invalid email address').required('Email is required')
        })}
        onSubmit={(values, {setSubmitting}) => {
          axios.put('/api/profile', values, {headers: {Authorization: `Bearer ${jwt}`}})
            .then(response => {
              setFlashMessage('Profile updated successfully!', 'success');
              setSubmitting(false);
            })
            .catch(error => {
              console.error('Error updating profile:', error);
              setFlashMessage('Failed to update profile.', 'danger');
              setSubmitting(false);
            });
        }}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary">Update Profile</button>
        </Form>
      </Formik>
      <button className="btn btn-secondary mt-3" onClick={() => setLocation('/')}>Back to Home</button>
    </div>
  );
}

