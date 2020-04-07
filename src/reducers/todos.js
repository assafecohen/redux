import {
  ADD_TODO,
  DELETE_TODO,
  OPEN_EDIT_MODAL,
  CLOSE_EDIT_MODAL,
  EDIT_TODO,
} from './../actions/actionsTypes';
const initalState = {
  todos: [
    { data: 'Clean my room', isCompleted: 'false', id: '1' },
    { data: 'Clean my room2', isCompleted: 'false', id: '2' },
  ],
  modal: {
    showModal: false,
  },
};

const todos = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { id: Math.random(), data: action.data, isCompleted: false },
        ],
        modal: state.modal,
      };
    case DELETE_TODO:
      const todos = state.todos.filter((todo) => {
        return todo.id !== action.id;
      });
      return {
        todos,
        modal: state.modal,
      };
    case OPEN_EDIT_MODAL:
      return {
        ...state,
        modal: {
          id: action.id,
          showModal: action.showModal,
          modalTitle: action.modalTitle,
        },
      };
    case CLOSE_EDIT_MODAL:
      return {
        ...state,
        modal: {
          showModal: action.showModal,
        },
      };
    case EDIT_TODO:
      const updatedTodos = state.todos.map((todo) => {
        if (action.id === todo.id) {
          todo.data = action.data;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
        modal: {
          showModal: action.showModal,
        },
      };
    default:
      return state;
  }
};

export default todos;
