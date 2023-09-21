import { connect } from "react-redux";
import Modal from "../components/Modal/Modal";
import { openModal } from "./../actions/index";

const ModalA = ({ isOpen, openModal }) => {
  openModal("A");
  return (
    <div className={"modal-backdrop"}>
      <Modal type="A" show={isOpen} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.modal.isOpen,
});

const mapDispatchToProps = {
  openModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalA);
