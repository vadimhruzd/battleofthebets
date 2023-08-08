import { useDispatch } from "react-redux";
import styles from "./ShowConfirm.module.scss";
import ReactModal from "react-modal";
import { CloseBtnSVG } from "../../assets/icons";
import Button from "../Button";
import { setMessage } from "../../store/slices/message";
import { useDeleteMutation } from "../../store/api/DeleteUserApi";

const ShowConfirm = (props) => {
  ReactModal.setAppElement("#root");
  const dispatch = useDispatch();
  const [deleteUser] = useDeleteMutation();

  const handleSave = () => {
    deleteUser(props.user)
      .unwrap()
      .then(() => {
        localStorage.removeItem("user");
        localStorage.removeItem("idToken");
        window.location.reload();
        dispatch(
          setMessage({
            message: "Your account was succesfully deleted",
            type: "success",
          })
        );
      })
      .catch((error) => {
        dispatch(
          setMessage({
            message: "You cant delete your account",
            type: "error",
          })
        );
      });
    props.handleCloseConfirmModal();
  };
  const handleCancel = () => {
    props.handleCloseConfirmModal();
  };
  return (
    <>
      <ReactModal
        isOpen={props.showConfirmModal}
        onRequestClose={props.handleCloseConfirmModal}
        shouldCloseOnOverlayClick={true}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.elementsWrapper}>
          <div className={styles.buttonClose_div}>
            <CloseBtnSVG
              className={styles.buttonCloseSVG}
              onClick={props.handleCloseConfirmModal}
            />
          </div>
          <div className={styles.article}>Confirm your action</div>
          <div className={styles.info_text}>
            Do you really want to delete your account?
          </div>
          <div className={styles.buttons}>
            <Button text="Yes" backgroundColor="#DC6B61" onClick={handleSave} />
            <Button text="Cancel" onClick={handleCancel} />
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default ShowConfirm;
