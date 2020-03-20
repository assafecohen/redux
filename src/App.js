import React from 'react';
import './index.css';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddTodoForm from './components/AddTodoForm';

import { useSelector, useDispatch } from 'react-redux';

const StyledContainer = styled(Container)`
  min-height: 100%;
  overflow: hidden;
`;
const StyledTitleRow = styled(Row)`
  margin-bottom: 40px;
`;
function App() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.themeColor);
  return (
    <StyledContainer fluid='lg'>
      <StyledTitleRow>
        <Col align='center'>
          <h1>TodoApp - REDUX & HOOKS</h1>
        </Col>
      </StyledTitleRow>
      <Row>
        <Col align='center'>
          <AddTodoForm />
        </Col>
      </Row>
    </StyledContainer>
  );
}

export default App;

{
  /* <div className='App'>
<h1>Counter {theme}</h1>
<button
  onClick={() => dispatch({ type: 'LIGHT_THEME', themeColor: 'light' })}
>
  INCERMENT
</button>
</div> */
}
