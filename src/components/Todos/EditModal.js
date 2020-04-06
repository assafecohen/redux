import React from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const EditModal = () => {
  const modal = useSelector((state) => state.todos.modal);

  return (
    <Modal show={modal.showModal}>
      <Modal.Header closeButton>
        <Modal.Title>Sure you want to delete?!</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modal.modalTitle}</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary'>Close</Button>
        <Button variant='primary'>Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
