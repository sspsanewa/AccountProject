import React from 'react';
import { Row, Col, Alert, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { VALIDATION_MSG } from 'config/constant'; // Ensure this is defined in your project
import { useNavigate } from 'react-router-dom';

const JWTLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setErrors, setSubmitting }) => {
    console.log('Form values', values);
    try {
      // Replace with actual login logic
      if (values.email === 'jhon@gmail.com' && values.password === '123456') {
        navigate('/dashboard');
      } else {
        setErrors({ submit: 'Invalid email address or password' });
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ submit: 'An unexpected error occurred' });
    } finally {
      setSubmitting(false); // Stop the submission state after the request
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email(VALIDATION_MSG.invalid_email).max(255).required(VALIDATION_MSG.empty_email),
        password: Yup.string()
          .min(6, VALIDATION_MSG.min_password)
          .max(255, VALIDATION_MSG.max_password)
          .required(VALIDATION_MSG.empty_password)
      })}
      onSubmit={handleSubmit}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          {' '}
          {/* Formik's handleSubmit */}
          <div className="form-group mb-3">
            <label className="form-group-label" htmlFor="email">
              Email Address*
            </label>
            <input className="form-control" name="email" onBlur={handleBlur} onChange={handleChange} type="email" value={values.email} />
            {touched.email && errors.email && <small className="text-danger form-text">{errors.email}</small>}
          </div>
          <div className="form-group mb-4">
            <label className="form-group-label" htmlFor="password">
              Password*
            </label>
            <input
              className="form-control"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              value={values.password}
            />
            {touched.password && errors.password && <small className="text-danger form-text">{errors.password}</small>}
          </div>
          <div className="custom-control custom-checkbox text-start mb-4 mt-2">
            <input type="checkbox" className="custom-control-input mx-2" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">
              Save credentials.
            </label>
          </div>
          {errors.submit && (
            <Col sm={12}>
              <Alert variant="danger">{errors.submit}</Alert>
            </Col>
          )}
          <Row>
            <Col mt={2}>
              <Button className="btn-block mb-4" disabled={isSubmitting} size="large" type="submit" variant="primary">
                Sign in
              </Button>
            </Col>
          </Row>
        </form>
      )}
    </Formik>
  );
};

export default JWTLogin;
