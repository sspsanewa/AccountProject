import React from 'react';
import { Row, Col, Alert, Button, Card } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { VALIDATION_MSG } from 'config/constant'; // Ensure this is defined in your project
import { useNavigate, NavLink } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setErrors, setSubmitting }) => {
    console.log('Form values', values);
    try {
      // Simulate forgot password logic here
      if (values.email) {
        // Replace this with actual logic to send a reset link
        navigate('/auth/reset-password'); // Redirect to a reset password page
      } else {
        setErrors({ submit: 'Please provide a valid email address.' });
      }
    } catch (error) {
      console.error('Forgot password error:', error);
      setErrors({ submit: 'An unexpected error occurred' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email(VALIDATION_MSG.invalid_email).max(255).required(VALIDATION_MSG.empty_email)
      })}
      onSubmit={handleSubmit}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <div className="auth-wrapper">
          <div className="auth-content">
            <div className="auth-bg">
              <span className="r" />
              <span className="r s" />
              <span className="r s" />
              <span className="r" />
            </div>
            <Card className="borderless">
              <Row className="align-items-center">
                <Col>
                  <Card.Body className="text-center">
                    <h3 className="mb-4">Forgot Password</h3>

                    <form noValidate onSubmit={handleSubmit}>
                      <div className="form-group mb-3">
                        <label className="form-group-label" htmlFor="email">
                          Email Address*
                        </label>
                        <input
                          className="form-control"
                          name="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="email"
                          value={values.email}
                        />
                        {touched.email && errors.email && <small className="text-danger form-text">{errors.email}</small>}
                      </div>

                      {errors.submit && (
                        <Col sm={12}>
                          <Alert variant="danger">{errors.submit}</Alert>
                        </Col>
                      )}

                      <Row>
                        <Col mt={2}>
                          <Button className="btn-block mb-4" disabled={isSubmitting} size="large" type="submit" variant="primary">
                            Send Reset Link
                          </Button>
                        </Col>
                      </Row>
                    </form>

                    <p className="mb-2">
                      Remembered your password?{' '}
                      <NavLink to="/auth/signin-1" className="f-w-400">
                        Login
                      </NavLink>
                    </p>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default ForgotPassword;
