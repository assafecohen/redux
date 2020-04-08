import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../actions';
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
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Row className='justify-content-center align-items-center mb-4'>
        <Col sm={6}>
          <StyledCard>{todo.data}</StyledCard>
        </Col>
        <Col sm={2}>
          <Button
            variant='secondary'
            onClick={() =>
              dispatch(
                actions.openEditModal({
                  id: todo.id,
                  showModal: true,
                  modalTitle: todo.data,
                })
              )
            }
          >
            Edit
          </Button>
        </Col>
        <Col sm={2}>
          <Button
            variant='danger'
            onClick={() =>
              dispatch(
                actions.openDeleteModal({
                  id: todo.id,
                  showModal: true,
                  modalTitle: todo.data,
                })
              )
            }
          >
            Delete
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Todo;
