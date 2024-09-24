import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Select = (props) => {
  return (
    <React.Fragment>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          {/* Step Indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
            <span className="span-heading1">1</span> Add account
            <span style={{ margin: '0 10px' }}>|</span>
            <span className="span-heading2">2</span> Sync account
          </div>

          {/* Provider Options */}
          <Container>
            <Row className="btn-page">
              <Col sm={12} className="accordion">
                <Card className="mt-2">
                  <Card.Header>
                    <Card.Title as="h4">Time to login to your email provider.</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>1. Find the popup window for logging into Google.</Card.Text>
                    <Card.Text>2. Login to Google by completing the instructions in the popup window.</Card.Text>{' '}
                    <Card.Text>3. Click on the Allow button to let Canopy read and send email messages.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

Select.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired
};

export default Select;
