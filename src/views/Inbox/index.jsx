import React from 'react';
import { Row, Col, Tabs, Tab, CardSubtitle } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'chart.js/auto';
import ConnectCalender from 'components/Model/ConnectCalender';
import PropTypes from 'prop-types';

const Inbox = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <React.Fragment>
      <Row>
        <Col>
          <h5>
            <b>Inbox</b>
          </h5>
          <hr />
          <Tabs variant="pills" defaultActiveKey="email">
            <Tab eventKey="email" title="Email">
              <Card className="border border-ternary rounded">
                <Card.Body className="text-center">
                  <i className="feather icon-mail" style={{ fontSize: '60px' }} />
                  <CardSubtitle>
                    <b>Add email account</b>
                  </CardSubtitle>
                  <Card.Text>Add your email account to better communicate with your clients.</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setModalShow(true);
                      props.onHide();
                    }}
                  >
                    Add email account
                  </Button>
                  {/* <Button variant="primary">Add an event</Button> */}
                </Card.Body>
              </Card>{' '}
            </Tab>
            <Tab eventKey="comments" title="Comments">
              <Card className="border border-ternary rounded">
                <Card.Body className="text-center">
                  <i className="feather icon-message-square" style={{ fontSize: '60px' }} />
                  <CardSubtitle>
                    <b>No conversations</b>
                  </CardSubtitle>
                  <Card.Text>Begin an internal conversation with a Team Member through an email.</Card.Text>
                  {/* <Button variant="primary">Add an event</Button> */}
                </Card.Body>
              </Card>{' '}
            </Tab>
          </Tabs>
        </Col>
      </Row>
      <ConnectCalender show={modalShow} onHide={() => setModalShow(false)} />
    </React.Fragment>
  );
};

Inbox.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired
};

export default Inbox;
