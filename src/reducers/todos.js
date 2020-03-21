import {
  ADD_TODO,
  DELETE_TODO,
  OPEN_EDIT_MODAL
} from './../actions/actionsTypes';
const initalState = {
  todos: [
    { data: 'Clean my room', isCompleted: 'false', id: '1' },
    { data: 'Clean my room2', isCompleted: 'false', id: '2' }
  ],
  modal: {
    id: '',
    showModal: false,
    modalTitle: ''
  }
};

const todos = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { id: Math.random(), data: action.data, isCompleted: false }
        ]
      };
    case DELETE_TODO:
      const todos = state.todos.filter(todo => {
        return todo.id !== action.id;
      });
      return {
        todos
      };
    case OPEN_EDIT_MODAL:
      console.log(action);
      return {
        ...state,
        modal: {
          id: action.id,
          showModal: action.showModal,
          modalTitle: action.modalTitle
        }
      };
    default:
      return state;
  }
};

export default todos;
