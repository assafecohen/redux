import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo/Todo';

const Todos = () => {
  const todos = useSelector(state => state.todos.todos);

  return todos.map(todo => {
    return <Todo id={todo.id} key={todo.id} todo={todo} />;
  });
};

export default Todos;
