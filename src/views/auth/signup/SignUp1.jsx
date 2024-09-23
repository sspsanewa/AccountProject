import React from 'react';
import { Row, Col, Alert, Button, Card } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { VALIDATION_MSG } from 'config/constant'; // Ensure this is defined in your project
import { useNavigate, Link, NavLink } from 'react-router-dom';

const SignUp1 = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setErrors, setSubmitting }) => {
    console.log('Form values', values);
    try {
      // Simulate sign-up logic here
      if (values.email && values.username && values.password) {
        // Replace this with actual sign-up logic
        navigate('/auth/signin-1');
      } else {
        setErrors({ submit: 'Sign-up failed. Please check your details.' });
      }
    } catch (error) {
      console.error('Sign-up error:', error);
      setErrors({ submit: 'An unexpected error occurred' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email(VALIDATION_MSG.invalid_email).max(255).required(VALIDATION_MSG.empty_email),
        password: Yup.string()
          .min(6, VALIDATION_MSG.min_password)
          .max(255, VALIDATION_MSG.max_password)
          .required(VALIDATION_MSG.empty_password)
      })}
      onSubmit={handleSubmit}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <React.Fragment>
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
                      <div className="mb-4">
                        <i className="feather icon-user-plus auth-icon" />
                      </div>
                      <h3 className="mb-4">Sign Up</h3>

                      <form noValidate onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                          <label className="form-group-label" htmlFor="username">
                            Username*
                          </label>
                          <input
                            className="form-control"
                            name="username"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type="text"
                            value={values.username}
                          />
                          {touched.username && errors.username && <small className="text-danger form-text">{errors.username}</small>}
                        </div>

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
                          <input type="checkbox" className="custom-control-input" id="customCheck1" />
                          <label className="custom-control-label" htmlFor="customCheck1">
                            Send me the <Link to="#">Newsletter</Link> weekly.
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
                              Sign Up
                            </Button>
                          </Col>
                        </Row>
                      </form>

                      <p className="mb-2">
                        Already have an account?{' '}
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
        </React.Fragment>
      )}
    </Formik>
  );
};

export default SignUp1;
