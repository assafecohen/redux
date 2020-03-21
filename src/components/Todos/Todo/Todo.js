import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const StyledCard = styled(Card)`
  padding: 10px;
  color: #000;
`;
const Todo = ({ todo }) => {
  return (
    <Row className='justify-content-center align-items-center mb-4'>
      <Col sm={6}>
        <StyledCard>{todo.data}</StyledCard>
      </Col>
      <Col sm={2}>
        <Button variant='secondary'>Edit</Button>
      </Col>
      <Col sm={2}>
        <Button variant='danger'>Delete</Button>
      </Col>
    </Row>
  );
};

export default Todo;
