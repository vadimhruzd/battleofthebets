import s from "./Profile.module.scss";
import { useDeleteMutation } from "../../store/api/DeleteUserApi";
import Button from "../../components/Button";
import ShowConfirm from "../../components/showConfirm";
import { useState } from "react";

const logout = () => {
  localStorage.removeItem("user");
  window.location.reload();
};

const Profile = () => {
  const user = localStorage?.getItem("user");
  const idToken = localStorage?.getItem("idToken");

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleCloseConfirmModal = () => {
    setShowConfirmModal(false);
  };

  const handleDeletePlayer = () => {
    setShowConfirmModal(true);
  };

  return (
    <div className={s.profile_wrapper}>
      <ShowConfirm
        user={user}
        showConfirmModal={showConfirmModal}
        handleCloseConfirmModal={handleCloseConfirmModal}
      />
      <div className={s.text}>Hello: {user}</div>
      <div className={s.buttons}>
        <Button onClick={handleDeletePlayer} text="Delete account"></Button>
        <Button
          onClick={logout}
          text="Logout"
          backgroundColor="white"
          textColor="#484848"
        ></Button>
      </div>
    </div>
  );
};

export default Profile;
