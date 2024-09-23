import React from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Link } from 'react-router-dom';
const Inbox = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to fill the container
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true
      }
    }
  };
  return (
    <React.Fragment>
      <Row>
        <Col>
          <h5>
            <b>Inbox</b>
          </h5>
          <hr />
          <Tabs defaultActiveKey="email">
            <Tab eventKey="email" title="Email">
              <Row>
                <Col md={3}>
                  <Card>
                    <Card.Header>
                      WEDNESDAY, SEPTEMBER
                      <br /> 18
                    </Card.Header>
                    <Card.Body className="text-center">
                      <i className="feather icon-calendar" style={{ fontSize: '24px' }} />
                      <Card.Text>Your Schedule is open</Card.Text>
                      <Button variant="primary">Add an event</Button>
                    </Card.Body>
                  </Card>{' '}
                </Col>
                <Col md={9}>
                  <Card className="mb-4">
                    <Card.Header className="d-flex justify-content-between align-items-center">
                      <Card.Title>Task</Card.Title>
                      <Link>View all task</Link>
                    </Card.Header>
                    <Card.Body>
                      <Row className="mb-3">
                        <Col md={3}>
                          <Row style={{ fontSize: '24px' }}>
                            <b>0</b>
                          </Row>
                          <Row>Tasks overdue</Row>
                        </Col>
                        <Col md={3}>
                          <Row style={{ fontSize: '24px' }}>
                            <b>0</b>
                          </Row>
                          <Row>Due this week</Row>
                        </Col>
                        <Col md={3}>
                          <Row style={{ fontSize: '24px' }}>
                            <b>0</b>
                          </Row>
                          <Row>Due next week</Row>
                        </Col>
                        <Col md={3}>
                          <Row style={{ fontSize: '24px' }}>
                            <b>0</b>
                          </Row>
                          <Row>Future tasks</Row>
                        </Col>
                      </Row>
                      <div style={{ position: 'relative', height: '40vh', width: '100%' }}>
                        <Line data={data} options={options} />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="comments" title="Comments">
              <p>
                Food truck fixie locavore, accusamus mcsweeney&apos;s marfa nulla single-origin coffee squid. Exercitation +1 labore velit,
                blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth
                letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda
                labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan
                fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel.
                Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
              </p>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Inbox;
