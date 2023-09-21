import { connect } from "react-redux";
import Modal from "../components/Modal/Modal";
import { openModal } from "./../actions/index";

const ModalB = ({ isOpen, openModal }) => {
  openModal("B");
  return (
    <div className={"modal-backdrop"}>
      <Modal type="B" show={isOpen} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.modal.isOpen,
});

const mapDispatchToProps = {
  openModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalB);
