import { GoogleOAuthProvider } from "@react-oauth/google";
import s from "./Profile.module.scss";
import jwtDecode from "jwt-decode";
import { useDeleteMutation } from "../../store/api/DeleteUserApi";

const logout = () => {
  localStorage.removeItem("user");
  window.location.reload();
};

const Profile = () => {
  const [deleteUser] = useDeleteMutation();
  const user = localStorage?.getItem("user");
  const idToken = localStorage?.getItem("idToken");

  const handleDeletePlayer = () => {
    console.log(user);
    console.log(idToken);
    deleteUser(user);
  };

  return (
    <div>
      <div className={s.user_id}>Hello:</div>
      <button onClick={handleDeletePlayer}>DELETE ACCOUNT</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
