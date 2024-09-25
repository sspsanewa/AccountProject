import React from 'react';
import { Button, Col, Modal, Nav, Row, Tab } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const AddClient = (props) => {
  return (
    <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Create Client</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ overflowY: 'hidden' }}>
        <Tab.Container defaultActiveKey="a">
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
                  <Form.Group>
                    <h6>
                      <b>Client Type</b>
                    </h6>
                    <div key={`radio`} className="mb-3 d-flex gap-4 ">
                      <Form.Check label="Individual" name="group1" type="radio" id={`radio-1`} />
                      <Form.Check label="Business" name="group1" type="radio" id={`radio-2`} />
                    </div>
                  </Form.Group>
                  <Form.Group id="a" className="mb-3" controlId="formBasicEmail">
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
                        <Form.Control type="select" size="sm" />
                      </Col>
                      <Col md={6}>
                        <Form.Label>External ID</Form.Label>
                        <Form.Control type="text" size="sm" />
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col md={6}>
                        <Form.Label>Source</Form.Label>
                        <Form.Control type="select" size="sm" />
                      </Col>
                      <Col md={6}>
                        <Form.Label>Client Since</Form.Label>
                        <Form.Control type="date" size="sm" />
                      </Col>
                    </Row>
                    <Row>
                      <Form.Label>Client Status</Form.Label>
                      <Form.Control type="text" size="sm" />
                    </Row>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
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
