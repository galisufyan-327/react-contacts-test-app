import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE,
  CHECKBOX_CHECKED,
} from './../actions/index';

const initialState = {
  contacts: [],
  checkBoxChecked: false,
  loading: true,
  error: null,
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: action.payload,
      };
    case FETCH_CONTACTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CHECKBOX_CHECKED:
      return {
        ...state,
        checkBoxChecked: action.checkBoxChecked
      }
    default:
      return state;
  }
};

export default contactsReducer;
