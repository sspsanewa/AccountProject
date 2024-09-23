import Modal from 'react-bootstrap/Modal';

import React from 'react';

const ConnectCalender = (props) => {
  return (
    <React.Fragment>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add account</Modal.Title>
          <Modal.Title id="contained-modal-title-vcenter">Sync account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Before you can create a calendar event, you will need to first connect a Google or Microsoft calendar with Canopy.</p>
          <p>Click here if you do not have a Google or Microsoft account to learn how to create one.</p>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default ConnectCalender;
