import { createSelector } from "reselect";

const selectProducts = (state) => state.contactReducer.contacts?.data?.products;
const selectCheckboxState = (state) => state.contactReducer.checkBoxChecked;

export const getFilteredProducts = createSelector(
  [selectProducts, selectCheckboxState],
  (products, checkBoxChecked) => {
    if (checkBoxChecked) {
      return products.filter((product) => product.id % 2 === 0);
    }
    return products;
  }
);
