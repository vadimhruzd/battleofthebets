import { useDispatch } from "react-redux";
import styles from "./ShowConfirm.module.scss";
import ReactModal from "react-modal";

const ShowConfirm = (props) => {
  const dispatch = useDispatch();

  const handleSave = () => {
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
            {/* <CloseBtnSVG
              className={styles.buttonCloseSVG}
              onClick={props.handleCloseConfirmModal}
            /> */}
          </div>
          <div className={styles.article}>Confirm your action</div>
          <div className={styles.info_text}>
            Do you really want to delete this?
          </div>
          <div className={styles.buttons}></div>
        </div>
      </ReactModal>
    </>
  );
};

export default ShowConfirm;
