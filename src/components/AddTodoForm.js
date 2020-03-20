import React from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { Col, Row, Form } from 'react-bootstrap';

const StyledButton = styled(Button)`
  max-width: 100%;
`;
const StyledFormLabel = styled(Form.Label)`
  max-width: 100%;
`;

const AddTodoForm = () => {
  return (
    <Form fluid='md'>
      <Form.Group controlId='exampleForm.ControlInput1'>
        <Row className='justify-content-md-center'>
          <Col sm={2}>
            <StyledFormLabel column sm={4}>
              Add Todo
            </StyledFormLabel>
          </Col>

          <Col sm={6}>
            <Form.Control type='text' placeholder='Add your next task...' />
          </Col>
          <Col sm={2}>
            <StyledButton type='submit' class='btn btn-primary mb-2'>
              Add
            </StyledButton>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
};

export default AddTodoForm;
