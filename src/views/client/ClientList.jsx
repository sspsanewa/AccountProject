import React from 'react';
import { Row, Col, Tabs, Tab, Button } from 'react-bootstrap';
import 'chart.js/auto';

import AddClient from 'components/Model/AddClient';
import ClientTable from 'components/Table/ClientTable';
import { sampleData } from 'assets/data/data';
// Sample data (same as before)

const ClientList = () => {
  // Grouped columns

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <React.Fragment>
      <Row>
        <Col>
          <Row>
            <Col md={2}>
              <h5>
                <b>Client List</b>
              </h5>
            </Col>
            <Col md={8}></Col>
            <Col md={2}>
              <Button onClick={() => setModalShow(true)}>Add Client</Button>
            </Col>
          </Row>
          <hr />
          <Tabs variant="pills" defaultActiveKey="active-clients">
            <Tab eventKey="active-clients" title="Active Clients">
              <ClientTable sampleData={sampleData} />
            </Tab>
            <Tab eventKey="business" title="Business">
              <ClientTable sampleData={sampleData} />
            </Tab>
            <Tab eventKey="individual" title="Individual">
              <ClientTable sampleData={sampleData} />
            </Tab>
            <Tab eventKey="prospect" title="Prospect">
              <ClientTable sampleData={sampleData} />
            </Tab>
          </Tabs>
          {/* Modal for Column Management */}

          <AddClient show={modalShow} onHide={() => setModalShow(false)} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ClientList;
