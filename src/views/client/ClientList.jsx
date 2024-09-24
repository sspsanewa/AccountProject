// src/components/ClientList.js

import React, { useState } from 'react';
import { Row, Col, Tabs, Tab, Table, InputGroup, FormControl, Button, Modal } from 'react-bootstrap';
import { CSVLink } from 'react-csv';
import 'chart.js/auto';
import filterColumns from '../../assets/images/other/columns.svg';
import share from '../../assets/images/other/share.svg';

// Sample data
const sampleData = [
  { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
  { id: 3, name: 'Alice Johnson', age: 45, email: 'alice@example.com' },
  { id: 4, name: 'Bob Brown', age: 23, email: 'bob@example.com' }
];

const ClientList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState(null);
  const [columns, setColumns] = useState([
    { key: 'name', label: 'Client Name', visible: true },
    { key: 'age', label: 'Client Type', visible: true },
    { key: 'email', label: 'Contacts', visible: true },
    { key: 'portalUser', label: 'Client Portal User', visible: true },
    { key: 'ein', label: 'EIN', visible: true },
    { key: 'owner', label: 'Client Owner', visible: true },
    { key: 'assignedUsers', label: 'Assigned Users', visible: true },
    { key: 'businessType', label: 'Business Type', visible: true },
    { key: 'tags', label: 'Tags', visible: true },
    { key: 'qbo', label: 'QBO', visible: true },
    { key: 'clientGroup', label: 'Client Group', visible: true }
  ]);

  // Modal state
  const [showModal, setShowModal] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = () => {
    let sortableItems = [...sampleData];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems.filter((item) =>
      Object.keys(item).some((key) => item[key].toString().toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  //   const handleColumnToggle = (key) => {
  //     setColumns((prevColumns) => prevColumns.map((col) => (col.key === key ? { ...col, visible: !col.visible } : col)));
  //   };

  const toggleColumnModal = () => setShowModal(!showModal);

  const handleColumnVisibilityChange = (key) => {
    setColumns((prevColumns) => prevColumns.map((col) => (col.key === key ? { ...col, visible: !col.visible } : col)));
  };

  return (
    <React.Fragment>
      <Row>
        <Col>
          <h5>
            <b>Client List</b>
          </h5>
          <hr />
          <Tabs defaultActiveKey="active-clients">
            <Tab eventKey="active-clients" title="Active Clients">
              <div>
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Col md={1}>
                    <div>
                      <Button variant="info" onClick={toggleColumnModal} className="me-1">
                        <img src={filterColumns} alt="filterColumns" />
                      </Button>
                    </div>
                  </Col>
                  <Col md={1}>
                    <CSVLink
                      data={sortedData()}
                      headers={columns.filter((col) => col.visible).map((col) => ({ label: col.label, key: col.key }))}
                      filename="table_data.csv"
                    >
                      <Button variant="success">
                        <img src={share} alt="share" />
                      </Button>
                    </CSVLink>
                  </Col>
                  <Col md={5}></Col>
                  <Col md={5}>
                    <InputGroup className="mb-3">
                      <FormControl placeholder="Search" onChange={handleSearchChange} />
                    </InputGroup>
                  </Col>
                </Row>
                {/* Make the table scrollable */}
                <div className="scrollable-table">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        {columns.map(
                          (col) =>
                            col.visible && (
                              <th key={col.key} onClick={() => requestSort(col.key)}>
                                {col.label}
                                <span className="sort-icon">
                                  {/* Show only one icon based on the sort direction */}
                                  {
                                    sortConfig && sortConfig.key === col.key ? (
                                      sortConfig.direction === 'ascending' ? (
                                        <i className="feather icon-chevron-up" style={{ fontSize: '18px', cursor: 'pointer' }} />
                                      ) : (
                                        <i className="feather icon-chevron-down" style={{ fontSize: '18px', cursor: 'pointer' }} />
                                      )
                                    ) : (
                                      ''
                                    ) // No icon if the column is not being sorted
                                  }
                                </span>
                              </th>
                            )
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {sortedData().map((item) => (
                        <tr key={item.id}>{columns.map((col) => col.visible && <td key={col.key}>{item[col.key]}</td>)}</tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </Tab>
            <Tab eventKey="business" title="Business"></Tab>
            <Tab eventKey="individual" title="Individual"></Tab>
            <Tab eventKey="prospect" title="Prospect"></Tab>
          </Tabs>

          {/* Modal for Column Management */}
          <Modal show={showModal} onHide={toggleColumnModal}>
            <Modal.Header closeButton>
              <Modal.Title>Manage Columns</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                {columns.map((col) => (
                  <Col xs={4} key={col.key} className="form-check mb-2">
                    <input
                      type="checkbox"
                      checked={col.visible}
                      onChange={() => handleColumnVisibilityChange(col.key)}
                      className="form-check-input"
                      id={col.key}
                    />
                    <label className="form-check-label" htmlFor={col.key}>
                      {col.label}
                    </label>
                  </Col>
                ))}
              </Row>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={toggleColumnModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ClientList;
