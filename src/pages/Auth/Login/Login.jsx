import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import s from "./Login.module.scss";
import jwtDecode from "jwt-decode";

const Login = () => {
  console.log(localStorage.getItem("user"));
  return (
    <div className={s.login_wrapper}>
      {" "}
      Battle of the bets
      <GoogleOAuthProvider clientId="485675376523-a4vgo2kde09v6s93144f8bi3rvu43is7.apps.googleusercontent.com">
        <GoogleLogin
          type="icon"
          onSuccess={(credentialResponse) => {
            localStorage.setItem("user", credentialResponse.credential);

            console.log(credentialResponse);
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
