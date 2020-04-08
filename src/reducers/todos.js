import {
  ADD_TODO,
  DELETE_TODO,
  OPEN_EDIT_MODAL,
  CLOSE_EDIT_MODAL,
  OPEN_DELETE_MODAL,
  CLOSE_DELETE_MODAL,
  EDIT_TODO,
} from './../actions/actionsTypes';
const initalState = {
  todos: [
    { data: 'Clean my room', isCompleted: 'false', id: '1' },
    { data: 'Clean my room2', isCompleted: 'false', id: '2' },
  ],
  editModal: {
    showModal: false,
  },
  deleteModal: {
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
        editModal: state.editModal,
        deleteModal: { showModal: false },
      };
    case DELETE_TODO:
      const todos = state.todos.filter((todo) => {
        console.log(action.id, ' acton id');
        return todo.id !== action.id;
      });
      console.log(todos);
      return {
        todos,
        editModal: state.editModal,
        deleteModal: { showModal: false },
      };
    case OPEN_EDIT_MODAL:
      return {
        ...state,
        editModal: {
          id: action.id,
          showModal: action.showModal,
          modalTitle: action.modalTitle,
        },
      };
    case CLOSE_EDIT_MODAL:
      return {
        ...state,
        editModal: {
          showModal: action.showModal,
        },
      };
    case OPEN_DELETE_MODAL:
      return {
        ...state,
        deleteModal: {
          id: action.id,
          showModal: action.showModal,
          modalTitle: action.modalTitle,
        },
      };
    case CLOSE_DELETE_MODAL:
      return {
        ...state,
        deleteModal: {
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
        deleteModal: {
          showModal: action.showModal,
        },
      };
    default:
      return state;
  }
};

export default todos;
