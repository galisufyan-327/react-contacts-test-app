import "./Modal.scss";

import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import Scrollbar from "react-custom-scrollbars";

import Button from "../Button/Button";
import {
  openModal,
  closeModal,
  fetchContacts,
  toggleCheckbox,
} from "../../actions/index";
import { getFilteredProducts } from "../../selectors/modalSelectors";
import { useNavigate } from "react-router-dom";
import InfoModal from "../InformationModal/InformationModal";

function Modal({ show, closeModal, openModal, fetchContacts, toggleCheckbox }) {
  const checkboxChecked = useSelector(
    (state) => state.contactReducer.checkBoxChecked
  );
  const filteredProducts = useSelector(getFilteredProducts);
  const modalType = useSelector((state) => state.modal.modalType);

  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [infoModal, setInfoModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const productDetailDefaultvalue = {
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
  };
  const [productDetail, setProductDetails] = useState(
    productDetailDefaultvalue
  );

  useEffect(() => {
    fetchContacts("", page, modalType);
  }, [page, modalType, fetchContacts]);

  useEffect(() => {
    if (filteredProducts) {
      let newProducts = filteredProducts;

      if (!searchQuery && !checkboxChecked && modalType !== "B") {
        newProducts = filteredProducts.filter((newProduct) => {
          return !products.some(
            (existingProduct) => existingProduct.id === newProduct.id
          );
        });

        setProducts([...products, ...newProducts]);
      } else {
        setProducts(newProducts);
      }
    }
  }, [filteredProducts, checkboxChecked]);

  const handleScroll = (e) => {
    if (searchQuery === "") {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      if (scrollHeight - scrollTop === clientHeight) {
        setPage(page + 1);
      }
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchContacts(searchQuery, page, modalType);
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const handleInputChange = (e) => {
    var query = e.target.value;

    if (e.key === "Enter") {
      fetchContacts(query, page, modalType);
    } else {
      setSearchQuery(query);
    }
  };

  const changeModal = (modalType) => {
    setPage(1);
    openModal(modalType);
    setProducts([]);
    navigate(`/modal-${modalType}`);
  };

  const closeModalHandler = () => {
    setPage(1);
    setProducts([]);
    closeModal();
    navigate("/");
  };

  const handleClickProduct = (product) => {
    setProductDetails(product);
    setInfoModal(true);
  };

  return (
    <>
      <div className={`${show ? "show" : ""} `} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal {modalType}</h5>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="Search..."
                className="form-control"
                onChange={handleInputChange}
                onKeyDown={handleInputChange}
              />
              <br />
              <Scrollbar onScroll={handleScroll}>
                <ul className="contact-list" style={{ listStyle: "none" }}>
                  {products?.map((product) => (
                    <li
                      key={product.id}
                      onClick={() => handleClickProduct(product)}
                    >
                      <b>Title: </b>
                      {product.title} <br />
                      <b>Price:</b> {product.price}
                      <br />
                      <br />
                    </li>
                  ))}
                </ul>
              </Scrollbar>
            </div>
            <div className="modal-footer">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  checked={checkboxChecked}
                  onChange={() => toggleCheckbox(!checkboxChecked)}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Only Even
                </label>
              </div>
              <Button
                text="All Products"
                variant="a"
                onClick={() => changeModal("A")}
              />
              <Button
                text="Laptops"
                variant="b"
                onClick={() => changeModal("B")}
              />
              <Button text="Close" variant="c" onClick={closeModalHandler} />
            </div>
          </div>
        </div>
      </div>
      <InfoModal
        productDetail={productDetail}
        infoModal={infoModal}
        setInfoModal={setInfoModal}
      />
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContacts: (query, page, modalType) => {
      dispatch(fetchContacts(query, page, modalType));
    },
    openModal: (modalType) => {
      dispatch(openModal(modalType));
    },
    closeModal: () => {
      dispatch(closeModal());
    },
    toggleCheckbox: (checkBoxChecked) => {
      dispatch(toggleCheckbox(checkBoxChecked));
    },
  };
};

export default connect(null, mapDispatchToProps)(Modal);
