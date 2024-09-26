import React, { useState } from 'react';
import { Button, ButtonGroup, Card, Col, FloatingLabel, Modal, Nav, Row, Tab } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const AddClient = (props) => {
  const [status, setStatus] = useState('Prospect');

  return (
    <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Create Client</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ overflowY: 'hidden' }}>
        <Tab.Container defaultActiveKey="#a">
          <Row>
            <Col sm={3} className="fixed-nav ">
              <Nav variant="pills" className="flex-column border border-ternary rounded">
                <Nav.Item>
                  <Nav.Link href="#a">Client Type</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#b">Client Info</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#c">Contacts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#d">Custom Fields</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#e">Roles</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#f">Tags</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9} className="scrollable-content">
              <Tab.Content className="border border-ternary rounded">
                <Form>
                  <Form.Group id="a" className="border border-ternary rounded p-4 mb-4">
                    <h6>
                      <b>Client Type</b>
                    </h6>
                    <div key={`radio`} className="d-flex gap-4 ">
                      <Form.Check label="Individual" name="group1" type="radio" id={`radio-1`} />
                      <Form.Check label="Business" name="group1" type="radio" id={`radio-2`} />
                    </div>
                  </Form.Group>
                  <Form.Group id="b" className="border border-ternary rounded p-4 mb-4" controlId="formBasicEmail">
                    <h6>
                      <b>Client Info</b>
                    </h6>
                    <Row>
                      <Col md={12}>
                        <Form.Label>Client name *</Form.Label>
                        <Form.Control type="text" size="sm" />
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col md={6}>
                        <Form.Label>Client owner</Form.Label>
                        <Form.Select size="sm">
                          <option>Select</option>
                          <option>Small select</option>
                          <option>Small select</option>
                        </Form.Select>{' '}
                      </Col>
                      <Col md={6}>
                        <Form.Label>External ID</Form.Label>
                        <Form.Control type="text" size="sm" />
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col md={6}>
                        <Form.Label>Filing Status</Form.Label>
                        <Form.Select size="sm">
                          <option>Select</option>
                          <option>Single</option>
                          <option>Married filing jointly</option>
                          <option>Married filing separately</option>
                          <option>Head of household</option>
                          <option>Qualifying widow(er) with dependent child</option>
                        </Form.Select>{' '}
                      </Col>
                      <Col md={6}>
                        <Form.Label>Source</Form.Label>
                        <Form.Select size="sm">
                          <option>Select</option>
                          <option>Mailer</option>
                          <option>Radio</option>
                          <option>Website</option>
                          <option>Referral</option>
                        </Form.Select>{' '}
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col md={6}>
                        <Form.Label>Client Since</Form.Label>
                        <Form.Control type="date" size="sm" />
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col md={6}>
                        <Row>
                          <Form.Label>Client Status</Form.Label>
                        </Row>
                        <Row>
                          <ButtonGroup className="mb-2">
                            <Button variant={status === 'Client' ? 'primary' : 'outline-secondary'} onClick={() => setStatus('Client')}>
                              Client
                            </Button>
                            <Button variant={status === 'Other' ? 'primary' : 'outline-secondary'} onClick={() => setStatus('Other')}>
                              Other
                            </Button>
                            <Button variant={status === 'Prospect' ? 'primary' : 'outline-secondary'} onClick={() => setStatus('Prospect')}>
                              Prospect
                            </Button>
                          </ButtonGroup>{' '}
                        </Row>
                      </Col>
                    </Row>
                    <Card className="border border-ternary rounded mt-3">
                      <Card.Body>
                        <div className="d-flex justify-content-between">
                          <h6>
                            <b>Active</b>
                          </h6>{' '}
                          <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                          />
                        </div>
                        <Card.Text>
                          When turned off, client functionality is reduced to client record information, notes, and email sync. Client
                          portal access will be deactivated. Only active clients count towards your client billing tier.{' '}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Form.Group>
                  <Form.Group id="c" className="border border-ternary rounded p-4 mb-4" controlId="formBasicCheckbox">
                    <h6>
                      <b>Contacts</b>
                    </h6>
                  </Form.Group>
                  <Form.Group id="d" className="border border-ternary rounded p-4 mb-4" controlId="formBasicCheckbox">
                    <h6>
                      <b>Custom Fields</b>
                    </h6>
                    <FloatingLabel controlId="floatingTextarea2" label="Additional information">
                      <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group id="e" className="border border-ternary rounded p-4 mb-4" controlId="formBasicCheckbox">
                    <h6>
                      <b>Roles</b>
                    </h6>
                    <Form.Label>General Users/Teams</Form.Label>
                    <Form.Select size="sm">
                      <option>Select</option>
                      <option>Small select</option>
                      <option>Small select</option>
                    </Form.Select>{' '}
                  </Form.Group>
                  <Form.Group id="f" className="border border-ternary rounded p-4 mb-4" controlId="formBasicCheckbox">
                    <h6>
                      <b>Tags</b>
                    </h6>
                    <Form.Control type="search" size="sm" placeholder="search" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

AddClient.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired
};

export default AddClient;
