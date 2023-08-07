import { GoogleOAuthProvider } from "@react-oauth/google";
import s from "./Profile.module.scss";
import jwtDecode from "jwt-decode";

const logout = () => {
  localStorage.removeItem("user");
  window.location.reload();
};

const Profile = () => {
  const user = localStorage?.getItem("user");
  return (
    <div>
      <div>Hello: {user}</div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
