import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { Row, Col, Card, Collapse, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import gmail_icon from '../../assets/images/other/gmail_icon.svg';
import exchange_icon from '../../assets/images/other/exchange_icon.svg';
import office_365_icon from '../../assets/images/other/office_365_icon.svg';
import Select from './Select';
import PropTypes from 'prop-types';

const ConnectCalender = (props) => {
  const [accordionKey, setAccordionKey] = useState(1);
  const [modalShow, setModalShow] = React.useState(false);

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
                <h5>Select your provider...</h5>
                <hr />
                <Card className="mt-2">
                  <Card.Header>
                    <Card.Title as="h6">
                      <Link
                        to="#"
                        onClick={() => setAccordionKey(accordionKey !== 1 ? 1 : 0)}
                        aria-controls="accordion1"
                        aria-expanded={accordionKey === 1}
                      >
                        <img width={20} height={20} src={gmail_icon} alt="Gmail Logo" style={{ marginRight: '10px' }} />
                        Gmail or Google Apps
                      </Link>
                    </Card.Title>
                  </Card.Header>
                  <Collapse in={accordionKey === 1}>
                    <div id="accordion1">
                      <Card.Body>
                        <Card.Text>Please select what to sync</Card.Text>
                        <div className="d-flex justify-content-between align-item-center">
                          <Form className="d-flex gap-3">
                            {['Email', 'Calendar'].map((type) => (
                              <div key={`default-${type}`} style={{ display: 'flex' }}>
                                <Form.Check
                                  type="checkbox"
                                  id={`default-${type}`}
                                  label={type}
                                  defaultChecked={true} // This ensures the checkbox is checked by default
                                />
                              </div>
                            ))}
                          </Form>
                          <Button
                            onClick={() => {
                              setModalShow(true);
                              props.onHide();
                            }}
                          >
                            Select
                          </Button>{' '}
                        </div>
                      </Card.Body>
                    </div>
                  </Collapse>
                </Card>
                <Card className="mt-2">
                  <Card.Header>
                    <Card.Title as="h6">
                      <Link
                        to="#"
                        onClick={() => setAccordionKey(accordionKey !== 2 ? 2 : 0)}
                        aria-controls="accordion2"
                        aria-expanded={accordionKey === 2}
                      >
                        <img width={20} height={20} src={exchange_icon} alt="Gmail Logo" style={{ marginRight: '10px' }} />
                        Microsoft Exchange
                      </Link>
                    </Card.Title>
                  </Card.Header>
                  <Collapse in={accordionKey === 2}>
                    <div id="accordion1">
                      <Card.Body>
                        <Card.Text>Please select what to sync</Card.Text>
                        <div className="d-flex justify-content-between align-item-center">
                          <Form className="d-flex gap-3">
                            {['Email', 'Calendar'].map((type) => (
                              <div key={`default-${type}`} style={{ display: 'flex' }}>
                                <Form.Check
                                  type="checkbox"
                                  id={`default-${type}`}
                                  label={type}
                                  defaultChecked={true} // This ensures the checkbox is checked by default
                                />
                              </div>
                            ))}
                          </Form>
                          <Link to="/">Select</Link>
                        </div>
                      </Card.Body>
                    </div>
                  </Collapse>
                </Card>
                <Card className="mt-2">
                  <Card.Header>
                    <Card.Title as="h6">
                      <Link
                        to="#"
                        onClick={() => setAccordionKey(accordionKey !== 3 ? 3 : 0)}
                        aria-controls="accordion3"
                        aria-expanded={accordionKey === 3}
                      >
                        <img width={20} height={20} src={office_365_icon} alt="Gmail Logo" style={{ marginRight: '10px' }} />
                        Microsoft 365
                      </Link>
                    </Card.Title>
                  </Card.Header>
                  <Collapse in={accordionKey === 3}>
                    <div id="accordion1">
                      <Card.Body>
                        <Card.Text>Please select what to sync</Card.Text>
                        <div className="d-flex justify-content-between align-item-center">
                          <Form className="d-flex gap-3">
                            {['Email', 'Calendar'].map((type) => (
                              <div key={`default-${type}`} style={{ display: 'flex' }}>
                                <Form.Check
                                  type="checkbox"
                                  id={`default-${type}`}
                                  label={type}
                                  defaultChecked={true} // This ensures the checkbox is checked by default
                                />
                              </div>
                            ))}
                          </Form>
                          <Link
                            to="/"
                            onClick={() => {
                              setModalShow(true);
                              props.onHide();
                            }}
                          >
                            Select
                          </Link>
                        </div>
                      </Card.Body>
                    </div>
                  </Collapse>
                </Card>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
      <Select show={modalShow} onHide={() => setModalShow(false)} />
    </React.Fragment>
  );
};

ConnectCalender.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired
};

export default ConnectCalender;
