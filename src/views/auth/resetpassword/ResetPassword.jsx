import React from 'react';
import { Row, Col, Alert, Button, Card } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { VALIDATION_MSG } from 'config/constant';

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setErrors, setSubmitting }) => {
    console.log('New password:', values);
    try {
      // Replace with your password reset logic
      if (values.newPassword && values.confirmPassword) {
        // Simulate successful password reset
        alert('Password reset successfully!');
        navigate('/auth/signin-1'); // Redirect to login page after successful reset
      } else {
        setErrors({ submit: 'Please fill in all fields.' });
      }
    } catch (error) {
      console.error('Reset password error:', error);
      setErrors({ submit: 'An unexpected error occurred' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        newPassword: '',
        confirmPassword: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        newPassword: Yup.string()
          .min(6, VALIDATION_MSG.min_password)
          .max(100, VALIDATION_MSG.max_password)
          .required(VALIDATION_MSG.empty_password),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('newPassword'), null], VALIDATION_MSG.passwords_must_match)
          .required(VALIDATION_MSG.empty_confirm_password)
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
                    <h3 className="mb-4">Reset Password</h3>

                    <form noValidate onSubmit={handleSubmit}>
                      <div className="form-group mb-3">
                        <label className="form-group-label" htmlFor="newPassword">
                          New Password*
                        </label>
                        <input
                          className="form-control"
                          name="newPassword"
                          type="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.newPassword}
                        />
                        {touched.newPassword && errors.newPassword && <small className="text-danger form-text">{errors.newPassword}</small>}
                      </div>

                      <div className="form-group mb-3">
                        <label className="form-group-label" htmlFor="confirmPassword">
                          Confirm Password*
                        </label>
                        <input
                          className="form-control"
                          name="confirmPassword"
                          type="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.confirmPassword}
                        />
                        {touched.confirmPassword && errors.confirmPassword && (
                          <small className="text-danger form-text">{errors.confirmPassword}</small>
                        )}
                      </div>

                      {errors.submit && (
                        <Col sm={12}>
                          <Alert variant="danger">{errors.submit}</Alert>
                        </Col>
                      )}

                      <Row>
                        <Col mt={2}>
                          <Button className="btn-block mb-4" disabled={isSubmitting} size="large" type="submit" variant="primary">
                            Reset Password
                          </Button>
                        </Col>
                      </Row>
                    </form>
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

export default ResetPassword;
