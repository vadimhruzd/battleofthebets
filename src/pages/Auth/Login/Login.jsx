import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import s from "./Login.module.scss";
import jwtDecode from "jwt-decode";

const Login = () => {
  console.log(localStorage.getItem("user"));
  return (
    <div className={s.login_wrapper}>
      {" "}
      Battle of the bets
      <GoogleOAuthProvider clientId="302963505183-ej1b428egeplrfeddgqnj1ickje3a67n.apps.googleusercontent.com">
        <GoogleLogin
          type="icon"
          onSuccess={(credentialResponse) => {
            localStorage.setItem("user", credentialResponse.credential);
            window.location.reload();
          }}
          onError={() => {
            alert("Login failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Login;
