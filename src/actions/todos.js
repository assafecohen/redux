import {
  ADD_TODO,
  DELETE_TODO,
  OPEN_EDIT_MODAL,
  CLOSE_EDIT_MODAL,
  EDIT_TODO,
  CLOSE_DELETE_MODAL,
  OPEN_DELETE_MODAL,
} from './actionsTypes';
export const addTodo = (data) => ({
  type: ADD_TODO,
  data,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const openEditModal = (modalData) => ({
  type: OPEN_EDIT_MODAL,
  id: modalData.id,
  showModal: modalData.showModal,
  modalTitle: modalData.modalTitle,
});
export const closeEditModal = (modalData) => ({
  type: CLOSE_EDIT_MODAL,
  showModal: modalData.showModal,
});
export const openDeleteModal = (modalData) => ({
  type: OPEN_DELETE_MODAL,
  id: modalData.id,
  showModal: modalData.showModal,
  modalTitle: modalData.modalTitle,
});
export const closeDeleteModal = (modalData) => ({
  type: CLOSE_DELETE_MODAL,
  showModal: modalData.showModal,
});
export const editTodo = (modalData) => ({
  type: EDIT_TODO,
  id: modalData.id,
  data: modalData.data,
  showModal: modalData.showModal,
});
