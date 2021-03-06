import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

const EditModal = () => {
  const editModal = useSelector((state) => state.todos.editModal);
  const dispatch = useDispatch();

  const handleShow = () => {
    dispatch(
      actions.closeEditModal({
        showModal: false,
      })
    );
  };
  const handleEditTask = () => {
    dispatch(
      actions.editTodo({
        data: taskInput,
        id: editModal.id,
        showModal: false,
      })
    );
  };

  const [taskInput, setTaskInput] = useState(editModal);
  useEffect(() => {
    setTaskInput(editModal.modalTitle || '');
  }, [editModal]);

  return (
    <Modal show={editModal.showModal} onHide={handleShow}>
      <Modal.Header closeButton>
        <Modal.Title>Clicking "Save Changes" reversed</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='insert you task...'
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleShow}>
          Close
        </Button>
        <Button variant='primary' onClick={handleEditTask}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
