const initalState = {
  todos: [
    { data: 'Clean my room', isCompleted: 'false', id: '1' },
    { data: 'Clean my room2', isCompleted: 'false', id: '2' }
  ]
};

const todos = (state = initalState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Math.random(), data: action.data, isCompleted: false }
        ]
      };
    case 'DELTE_TODO':
      return {};

    default:
      return state;
  }
};

export default todos;
