import React, { Fragment } from 'react';
import './index.css';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddTodoForm from './components/AddTodoForm';
import Todos from './components/Todos/Todos';
import { useSelector, useDispatch } from 'react-redux';

const StyledTitleRow = styled(Row)`
  margin: 40px 0;
  color: #fff;
`;
function App() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.themeColor);
  return (
    <Fragment>
      <Container>
        <StyledTitleRow>
          <Col align='center'>
            <h1>TodoApp - REDUX & HOOKS</h1>
          </Col>
        </StyledTitleRow>
        <Row>
          <Col>
            <AddTodoForm />
          </Col>
        </Row>
      </Container>
      <Container style={{ maxWidth: '900px' }}>
        <Todos />
      </Container>
    </Fragment>
  );
}

export default App;
