import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { Col, Row, Form } from 'react-bootstrap';
import * as actions from '../actions';
const StyledButton = styled(Button)`
  width: 120px;
`;
const AddTodoForm = () => {
  const [taskInput, setTaskInput] = useState('');

  const dispatch = useDispatch();
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (taskInput.length) {
      dispatch(actions.addTodo(taskInput));
      setTaskInput('');
    }
  };

  return (
    <Form>
      <Form.Group controlId='exampleForm.ControlInput1'>
        <Row className='justify-content-center'>
          <Col lg='6'>
            <Form.Control
              type='text'
              value={taskInput}
              onChange={(e) => {
                setTaskInput(e.target.value);
              }}
              placeholder='Add your next task...'
            />
          </Col>
          <Col lg='2'>
            <StyledButton
              onClick={(e) => handleAddTodo(e)}
              className='btn btn-primary mb-2'
            >
              Add
            </StyledButton>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
};
export default AddTodoForm;
