import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import ConnectCalender from './ConnectCalender';
import PropTypes from 'prop-types';

const AddEvent = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  console.log('props', props.show);
  return (
    <React.Fragment>
      <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Sync Calendar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Before you can create a calendar event, you will need to first connect a Google or Microsoft calendar with Canopy.</p>
          <p>Click here if you do not have a Google or Microsoft account to learn how to create one.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setModalShow(true);
              props.onHide();
            }}
          >
            Connect Calender{' '}
          </Button>
        </Modal.Footer>
      </Modal>
      <ConnectCalender show={modalShow} onHide={() => setModalShow(false)} />
    </React.Fragment>
  );
};

AddEvent.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.bool.isRequired
};
export default AddEvent;
