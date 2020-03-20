const initalState = {
  data: []
};

const todos = (state = initalState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        data: [...state.data, { id: Math.random(), text: action.text }]
      };
    case 'DELTE_TODO':
      return {};

    default:
      return state;
  }
};

export default todos;
