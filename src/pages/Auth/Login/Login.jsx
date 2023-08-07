import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import s from "./Login.module.scss";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useAuthMutation } from "../../../store/api/AuthApi";

import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

const Login = () => {
  console.log(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [auth] = useAuthMutation();
  return (
    <div className={s.login_wrapper}>
      Battle of the bets
      <GoogleOAuthProvider clientId="485675376523-a4vgo2kde09v6s93144f8bi3rvu43is7.apps.googleusercontent.com">
        <GoogleLogin
          type="icon"
          onSuccess={(credentialResponse) => {
            // localStorage.setItem("user", credentialResponse.credential);
            // console.log(credentialResponse);
            // console.log(localStorage.getItem("user"));
            auth(credentialResponse.credential)
              .unwrap()
              .then((response) => {
                localStorage.setItem("user", response.userId);
                window.location.reload();
              })
              .catch((error) => console.log(error));
          }}
          onError={() => {
            alert("Login failed");
          }}
        />
      </GoogleOAuthProvider>
      <LoginSocialFacebook
        appId="239859572250126"
        onResolve={(response) => {
          console.log(response);
        }}
        onReject={(error) => {
          console.log(error);
        }}
      >
        <FacebookLoginButton />
      </LoginSocialFacebook>
    </div>
  );
};

export default Login;
