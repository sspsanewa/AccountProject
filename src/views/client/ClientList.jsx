import React, { useState } from 'react';
import { Row, Col, Tabs, Tab, Table, InputGroup, FormControl, Button, Modal, Card } from 'react-bootstrap';
import { CSVLink } from 'react-csv';
import 'chart.js/auto';
import filterColumns from '../../assets/images/other/columns.svg';
import share from '../../assets/images/other/share.svg';
import AddClient from 'components/Model/AddClient';

// Sample data (same as before)
const sampleData = [
  {
    id: 1,
    active: true,
    city: 'New York',
    clientGroup: 'Enterprise',
    clientPortalUser: 'John Doe',
    clientSince: '2015-06-01',
    clientType: 'Premium',
    contacts: 'john@example.com',
    country: 'USA',
    email: 'john@example.com',
    externalId: 'EXT123',
    filingStatus: 'Filed',
    phone: '555-1234',
    referredBy: 'Referral Partner',
    source: 'Website',
    state: 'NY',
    streetAddress: '123 Main St',
    zip: '10001',
    assignedTeams: 'Team A',
    assignedUsers: 'John Doe',
    clientOwes: '$1500',
    clientOwner: 'John Doe',
    qbo: 'Yes',
    tags: 'VIP, Priority',
    businessName: 'John Doe Inc.',
    businessType: 'SaaS',
    contactPerson: 'John Doe',
    dateEstablished: '2005-03-10',
    ein: '12-3456789',
    industry: 'Technology'
  },
  {
    id: 2,
    active: false,
    city: 'Los Angeles',
    clientGroup: 'Small Business',
    clientPortalUser: 'Jane Smith',
    clientSince: '2017-08-15',
    clientType: 'Standard',
    contacts: 'jane@example.com',
    country: 'USA',
    email: 'jane@example.com',
    externalId: 'EXT456',
    filingStatus: 'Pending',
    phone: '555-5678',
    referredBy: 'Ad Campaign',
    source: 'Google Ads',
    state: 'CA',
    streetAddress: '456 Oak Ave',
    zip: '90001',
    assignedTeams: 'Team B',
    assignedUsers: 'Jane Smith',
    clientOwes: '$250',
    clientOwner: 'Jane Smith',
    qbo: 'No',
    tags: 'Standard',
    businessName: 'Jane Smith LLC',
    businessType: 'Retail',
    contactPerson: 'Jane Smith',
    dateEstablished: '2010-11-12',
    ein: '98-7654321',
    industry: 'Retail'
  },
  {
    id: 3,
    active: true,
    city: 'Chicago',
    clientGroup: 'Mid-sized',
    clientPortalUser: 'Alice Johnson',
    clientSince: '2010-02-20',
    clientType: 'Premium',
    contacts: 'alice@example.com',
    country: 'USA',
    email: 'alice@example.com',
    externalId: 'EXT789',
    filingStatus: 'Filed',
    phone: '555-9012',
    referredBy: 'Business Conference',
    source: 'Referral',
    state: 'IL',
    streetAddress: '789 Pine Rd',
    zip: '60601',
    assignedTeams: 'Team C',
    assignedUsers: 'Alice Johnson',
    clientOwes: '$5000',
    clientOwner: 'Alice Johnson',
    qbo: 'Yes',
    tags: 'Priority',
    businessName: 'Alice Johnson Corp.',
    businessType: 'Manufacturing',
    contactPerson: 'Alice Johnson',
    dateEstablished: '2002-09-25',
    ein: '11-2345678',
    industry: 'Manufacturing'
  },
  {
    id: 4,
    active: false,
    city: 'Houston',
    clientGroup: 'Startups',
    clientPortalUser: 'Bob Brown',
    clientSince: '2021-05-30',
    clientType: 'Basic',
    contacts: 'bob@example.com',
    country: 'USA',
    email: 'bob@example.com',
    externalId: 'EXT101',
    filingStatus: 'Not Filed',
    phone: '555-3456',
    referredBy: 'Cold Email',
    source: 'Social Media',
    state: 'TX',
    streetAddress: '321 Cedar Blvd',
    zip: '77001',
    assignedTeams: 'Team D',
    assignedUsers: 'Bob Brown',
    clientOwes: '$0',
    clientOwner: 'Bob Brown',
    qbo: 'No',
    tags: 'New Client',
    businessName: 'Bob Brown Co.',
    businessType: 'Consulting',
    contactPerson: 'Bob Brown',
    dateEstablished: '2020-07-15',
    ein: '33-9876543',
    industry: 'Consulting'
  }
];

const ClientList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState(null);

  // Grouped columns
  const [clientAttributes, setClientAttributes] = useState([
    { key: 'active', label: 'Active', visible: true },
    { key: 'city', label: 'City', visible: true },
    { key: 'clientGroup', label: 'Client Group', visible: true },
    { key: 'clientPortalUser', label: 'Client Portal User', visible: true },
    { key: 'clientSince', label: 'Client Since', visible: true },
    { key: 'clientType', label: 'Client Type', visible: true },
    { key: 'contacts', label: 'Contacts', visible: true },
    { key: 'country', label: 'Country', visible: true },
    { key: 'email', label: 'Email', visible: true },
    { key: 'externalId', label: 'External ID', visible: true },
    { key: 'filingStatus', label: 'Filing Status', visible: true },
    { key: 'phone', label: 'Phone', visible: true },
    { key: 'referredBy', label: 'Referred By', visible: true },
    { key: 'source', label: 'Source', visible: true },
    { key: 'state', label: 'State', visible: true },
    { key: 'streetAddress', label: 'Street Address', visible: true },
    { key: 'zip', label: 'Zip', visible: true }
  ]);

  const [firmAttributes, setFirmAttributes] = useState([
    { key: 'assignedTeams', label: 'Assigned Teams', visible: true },
    { key: 'assignedUsers', label: 'Assigned Users', visible: true },
    { key: 'clientOwes', label: 'Client Owes', visible: true },
    { key: 'clientOwner', label: 'Client Owner', visible: true },
    { key: 'qbo', label: 'QBO', visible: true },
    { key: 'tags', label: 'Tags', visible: true }
  ]);

  const [businessAttributes, setBusinessAttributes] = useState([
    { key: 'businessName', label: 'Business Name', visible: true },
    { key: 'businessType', label: 'Business Type', visible: true },
    { key: 'contactPerson', label: 'Contact Person', visible: true },
    { key: 'dateEstablished', label: 'Date Established', visible: true },
    { key: 'ein', label: 'EIN', visible: true },
    { key: 'industry', label: 'Industry', visible: true }
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

  const toggleColumnModal = () => setShowModal(!showModal);
  const [selectAllClient, setSelectAllClient] = useState(true);
  const [selectAllFirm, setSelectAllFirm] = useState(true);
  const [selectAllBusiness, setSelectAllBusiness] = useState(true);

  const handleColumnVisibilityChange = (key, groupSetter, groupState, setSelectAll) => {
    const updatedColumns = groupState.map((col) => (col.key === key ? { ...col, visible: !col.visible } : col));
    groupSetter(updatedColumns);

    // Check if all columns are visible to update the select all state
    const allVisible = updatedColumns.every((col) => col.visible);
    setSelectAll(allVisible);
  };

  const toggleSelectAll = (attributes, setAttributes, setSelectAll) => {
    const allVisible = attributes.every((col) => col.visible);
    const updatedAttributes = attributes.map((col) => ({ ...col, visible: !allVisible }));
    setAttributes(updatedAttributes);
    setSelectAll(!allVisible);
  };
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
                      headers={[
                        ...clientAttributes.filter((col) => col.visible),
                        ...firmAttributes.filter((col) => col.visible),
                        ...businessAttributes.filter((col) => col.visible)
                      ].map((col) => ({ label: col.label, key: col.key }))}
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
                        {[...clientAttributes, ...firmAttributes, ...businessAttributes].map(
                          (col) =>
                            col.visible && (
                              <th style={{ cursor: 'pointer' }} key={col.key} onClick={() => requestSort(col.key)}>
                                {col.label}
                                <span className="sort-icon">
                                  {sortConfig && sortConfig.key === col.key ? (
                                    sortConfig.direction === 'ascending' ? (
                                      <i className="feather icon-chevron-up" style={{ fontSize: '18px' }} />
                                    ) : (
                                      <i className="feather icon-chevron-down" style={{ fontSize: '18px' }} />
                                    )
                                  ) : (
                                    ''
                                  )}
                                </span>
                              </th>
                            )
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {sortedData().map((item) => (
                        <tr key={item.id}>
                          {[...clientAttributes, ...firmAttributes, ...businessAttributes].map(
                            (col) => col.visible && <td key={col.key}>{item[col.key]}</td>
                          )}
                        </tr>
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
          <Modal show={showModal} onHide={toggleColumnModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">Manage Columns</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card>
                <Card.Body>
                  <Card.Title>Client Attributes</Card.Title>

                  <input
                    style={{ cursor: 'pointer' }}
                    type="checkbox"
                    checked={selectAllClient}
                    onClick={() => toggleSelectAll(clientAttributes, setClientAttributes, setSelectAllClient)}
                    className="form-check-input custom-checkbox"
                    id="Select All"
                  />
                  <label style={{ marginLeft: '8px', cursor: 'pointer' }} className="form-check-label" htmlFor="Select All">
                    Select All
                  </label>
                  <Card.Text style={{ marginLeft: '12px' }}>
                    <Row>
                      {clientAttributes.map((col) => (
                        <Col md={4} key={col.key} className="form-check mb-2">
                          <input
                            style={{ cursor: 'pointer' }}
                            type="checkbox"
                            className="form-check-input custom-checkbox"
                            checked={col.visible}
                            onChange={() =>
                              handleColumnVisibilityChange(col.key, setClientAttributes, clientAttributes, setSelectAllClient)
                            }
                            id={col.key}
                          />
                          <label style={{ cursor: 'pointer' }} className="form-check-label" htmlFor={col.key}>
                            {col.label}
                          </label>
                        </Col>
                      ))}
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Firm Attributes</Card.Title>
                  <input
                    type="checkbox"
                    checked={selectAllFirm}
                    onClick={() => toggleSelectAll(firmAttributes, setFirmAttributes, setSelectAllFirm)}
                    className="form-check-input custom-checkbox"
                    id="Select All"
                  />
                  <label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="Select All">
                    Select All
                  </label>{' '}
                  <Card.Text style={{ marginLeft: '12px' }}>
                    <Row>
                      {firmAttributes.map((col) => (
                        <Col xs={4} key={col.key} className="form-check mb-2">
                          <input
                            style={{ cursor: 'pointer' }}
                            type="checkbox"
                            checked={col.visible}
                            onChange={() => handleColumnVisibilityChange(col.key, setFirmAttributes, firmAttributes, setSelectAllFirm)}
                            className="form-check-input custom-checkbox"
                            id={col.key}
                          />
                          <label style={{ cursor: 'pointer' }} className="form-check-label" htmlFor={col.key}>
                            {col.label}
                          </label>
                        </Col>
                      ))}
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Business Attributes</Card.Title>
                  <input
                    type="checkbox"
                    checked={selectAllBusiness}
                    onClick={() => toggleSelectAll(businessAttributes, setBusinessAttributes, setSelectAllBusiness)}
                    className="form-check-input custom-checkbox"
                    id="Select All"
                  />
                  <label style={{ marginLeft: '8px' }} className="form-check-label" htmlFor="Select All">
                    Select All
                  </label>{' '}
                  <Card.Text style={{ marginLeft: '12px' }}>
                    <Row>
                      {businessAttributes.map((col) => (
                        <Col xs={4} key={col.key} className="form-check mb-2">
                          <input
                            style={{ cursor: 'pointer' }}
                            type="checkbox"
                            checked={col.visible}
                            onChange={() =>
                              handleColumnVisibilityChange(col.key, setBusinessAttributes, businessAttributes, setSelectAllBusiness)
                            }
                            className="form-check-input custom-checkbox"
                            id={col.key}
                          />
                          <label style={{ cursor: 'pointer' }} className="form-check-label" htmlFor={col.key}>
                            {col.label}
                          </label>
                        </Col>
                      ))}
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={toggleColumnModal}>Close</Button>
            </Modal.Footer>
          </Modal>
          <AddClient show={modalShow} onHide={() => setModalShow(false)} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ClientList;
