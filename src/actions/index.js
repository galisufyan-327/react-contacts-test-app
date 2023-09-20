import axios from 'axios';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const FETCH_CONTACTS_REQUEST = 'FETCH_CONTACTS_REQUEST';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_FAILURE = 'FETCH_CONTACTS_FAILURE';
export const CHECKBOX_CHECKED = 'CHECKBOX_CHECKED';

export const fetchContactsRequest = () => ({
  type: FETCH_CONTACTS_REQUEST,
});

export const fetchContactsSuccess = (contacts) => ({
  type: FETCH_CONTACTS_SUCCESS,
  payload: contacts,
});

export const fetchContactsFailure = (error) => ({
  type: FETCH_CONTACTS_FAILURE,
  payload: error,
});

export const toggleCheckbox = (checkBoxChecked) => ({ checkBoxChecked: checkBoxChecked, type: CHECKBOX_CHECKED })
export const openModal = (modalType) => ({ modalType: modalType, type: OPEN_MODAL });
export const closeModal = () => ({ type: CLOSE_MODAL });
export const fetchContacts = (query, page, modalType) => {
  return (dispatch) => {
    dispatch(fetchContactsRequest());
    console.log(modalType)
    let isLaptopsModal = modalType == 'B'

    let url = query == '' || isLaptopsModal
      ? 'https://dummyjson.com/products/'
      : 'https://dummyjson.com/products/search'

    if(isLaptopsModal) {
      url = url + `category/laptops`
      console.log(url)
    }

    let params = query == '' || isLaptopsModal ? {
      limit: 10,
      skip: 10 * (page - 1),
    } : {
      q: query
    }

    axios
    .get(url, {params})
    .then((response) => {
      dispatch(fetchContactsSuccess(response));
    })
    .catch((error) => {
      dispatch(fetchContactsFailure(error.message));
    });
  };
};