import "./informationModal.scss";

import React from "react";

function InfoModal(props) {
  const { productDetail, infoModal, setInfoModal } = props;
  return (
    <div
      id="myModal"
      class="modal-information"
      style={{ display: infoModal ? "block" : "none" }}
    >
      <div class="modal-info-content">
        <span
          class="close"
          id="closeModal"
          onClick={() => {
            setInfoModal(false);
          }}
        >
          &times;
        </span>
        <h2 id="modalTitle">{productDetail.title}</h2>
        <p id="modalDescription">{productDetail.description}</p>
        <p>
          <strong>Price: </strong>
          <span id="modalPrice">{`$${productDetail.price}`}</span>
        </p>
        <p>
          <strong>Discount: </strong>
          <span id="modalDiscount">{`${productDetail.discountPercentage}%`}</span>
        </p>
        <p>
          <strong>Rating: </strong>
          <span id="modalRating">{productDetail.rating}</span>
        </p>
        <p>
          <strong>Stock: </strong>
          <span id="modalStock">{productDetail.stock}</span>
        </p>
        <p>
          <strong>Brand: </strong>
          <span id="modalBrand">{productDetail.brand}</span>
        </p>
        <p>
          <strong>Category: </strong>
          <span id="modalCategory">{productDetail.category}</span>
        </p>
        <img
          id="modalThumbnail"
          src={productDetail.thumbnail}
          alt="Product Thumbnail"
        />
      </div>
    </div>
  );
}

export default InfoModal;
