import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

const DeleteModal = () => {
  const deleteModal = useSelector((state) => state.todos.deleteModal);
  const dispatch = useDispatch();

  const handleShow = () => {
    dispatch(
      actions.closeDeleteModal({
        showModal: false,
      })
    );
  };
  const handleDeleteTodo = () => {
    dispatch(actions.deleteTodo(deleteModal.id));
    dispatch(
      actions.closeDeleteModal({
        showModal: false,
      })
    );
  };

  return (
    <Modal show={deleteModal.showModal} onHide={handleShow}>
      <Modal.Header closeButton>
        <Modal.Title>Clicking "Save Changes" reversed</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group></Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleShow}>
          Close
        </Button>
        <Button variant='primary' onClick={handleDeleteTodo}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
