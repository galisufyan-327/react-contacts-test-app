import "./main.scss";
import Button from "../Button/Button";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const MainScreen = ({ isOpen }) => {
  const navigate = useNavigate();

  return (
    <div className={`${isOpen ? "modal-backdrop" : ""}`}>
      <div className="main-container">
        <Button
          text="Modal A"
          variant="a"
          onClick={() => {
            navigate("/modal-a");
          }}
        />
        <Button
          text="Modal B"
          variant="b"
          onClick={() => {
            navigate("/modal-b");
          }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.modal.isOpen,
});

export default connect(mapStateToProps)(MainScreen);
