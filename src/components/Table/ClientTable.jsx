import React, { useState } from 'react';
import { Row, Col, Table, InputGroup, FormControl, Button, Modal, Card, Pagination } from 'react-bootstrap';
import { CSVLink } from 'react-csv';
import 'chart.js/auto';
import filterColumns from '../../assets/images/other/columns.svg';
import share from '../../assets/images/other/share.svg';
import PropTypes from 'prop-types';
// Sample data (same as before)

const ClientTable = ({ sampleData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
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

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData().slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(sortedData().length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <React.Fragment>
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
              {!currentItems || currentItems.length === 0 ? (
                <tr>
                  <td colSpan="100%">
                    <Card style={{ width: '20rem' }} className="border border-ternary rounded">
                      <Card.Body className="d-flex justify-content-center flex-direc">
                        <div className="text-center mb-3">
                          <i className="feather icon-filter" style={{ fontSize: '60px' }} />
                        </div>
                        <Card.Subtitle className="mb-2">No results</Card.Subtitle>
                        <Card.Text>Please refine your filters.</Card.Text>
                      </Card.Body>
                    </Card>{' '}
                  </td>
                </tr>
              ) : (
                currentItems.map((item) => (
                  <tr key={item.id}>
                    {[...clientAttributes, ...firmAttributes, ...businessAttributes].map(
                      (col) => col.visible && <td key={col.key}>{item[col.key]}</td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
        <Pagination className="mt-3 d-flex justify-content-center">
          <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
          <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
          {[...Array(totalPages).keys()].map((pageNumber) => (
            <Pagination.Item key={pageNumber + 1} active={pageNumber + 1 === currentPage} onClick={() => handlePageChange(pageNumber + 1)}>
              {pageNumber + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
          <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
        </Pagination>
      </div>
      <Modal show={showModal} onHide={toggleColumnModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Manage Columns</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card className=" border border-ternary rounded p-2 mb-4">
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
                        onChange={() => handleColumnVisibilityChange(col.key, setClientAttributes, clientAttributes, setSelectAllClient)}
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
          <Card className=" border border-ternary rounded p-2 mb-4">
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
          <Card className=" border border-ternary rounded p-2 mb-4">
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
          <Button onClick={toggleColumnModal}>Done</Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

ClientTable.propTypes = {
  sampleData: PropTypes.array.isRequired
};

export default ClientTable;
