import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import s from "./Login.module.scss";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useAuthMutation } from "../../../store/api/AuthApi";

import {
  LoginSocialFacebook,
  LoginSocialApple,
  LoginSocialGoogle,
} from "reactjs-social-login";
import {
  FacebookLoginButton,
  AppleLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

const Login = () => {
  console.log(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [auth] = useAuthMutation();
  return (
    <div className={s.login_wrapper}>
      <div className={s.logo}>
        <img
          src="https://images.squarespace-cdn.com/content/v1/64725f2836f4e8340893612b/865d048d-03a4-47f4-b776-d5dd0820abd3/BOTB+Logo.png"
          width={100}
          alt="nothing"
        />
      </div>
      <div className={s.text}>Login via social networks</div>
      <div className={s.auth_btns}>
        <GoogleOAuthProvider clientId="485675376523-a4vgo2kde09v6s93144f8bi3rvu43is7.apps.googleusercontent.com">
          <GoogleLogin
            className={s.btn}
            type="icon"
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
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
        {/* <LoginSocialGoogle
          className={s.btn}
          client_id="485675376523-a4vgo2kde09v6s93144f8bi3rvu43is7.apps.googleusercontent.com"
          onResolve={(credentialResponse) => {
            console.log(credentialResponse);
            auth(credentialResponse.data.access_token)
              .unwrap()
              .then((response) => {
                console.log(response);
                localStorage.setItem("user", response);
                window.location.reload();
              })
              .catch((error) => console.log(error));
          }}
          onReject={(error) => {
            console.log(error);
          }}
        >
          <GoogleLoginButton
            text=""
            align="center"
            preventActiveStyles={true}
          />
        </LoginSocialGoogle> */}
        <LoginSocialFacebook
          className={s.btn}
          appId="239859572250126"
          onResolve={(response) => {
            console.log(response);
          }}
          onReject={(error) => {
            console.log(error);
          }}
        >
          <FacebookLoginButton
            text=""
            align="center"
            preventActiveStyles={true}
          />
        </LoginSocialFacebook>
        <LoginSocialApple
          className={s.btn}
          client_id="6455939972"
          onResolve={(response) => {
            console.log(response);
          }}
          onReject={(error) => {
            console.log(error);
          }}
        >
          <AppleLoginButton text="" align="center" preventActiveStyles={true} />
        </LoginSocialApple>
      </div>
    </div>
  );
};

export default Login;
