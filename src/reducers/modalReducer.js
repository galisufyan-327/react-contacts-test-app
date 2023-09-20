import { OPEN_MODAL, CLOSE_MODAL } from '../actions/index';

const initialState = {
  isOpen: false,
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
    return { modalType: action.modalType, isOpen: true };
    case CLOSE_MODAL:
    return { isOpen: false };
    default:
    return state;
  }
}