import { ADD_TODO, DELETE_TODO, OPEN_EDIT_MODAL } from './actionsTypes';
export const addTodo = data => ({
  type: ADD_TODO,
  data
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

export const openEditModal = modalData => ({
  type: OPEN_EDIT_MODAL,
  id: modalData.id,
  showModal: modalData.showModal,
  modalTitle: modalData.modalTitle
});
