import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import s from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import { useAuthMutation } from "../../../store/api/AuthApi";
import { useDispatch } from "react-redux";
import { setMessage } from "../../../store/slices/message";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
        <div className={s.btnGoogle}>
          <GoogleOAuthProvider clientId="485675376523-a4vgo2kde09v6s93144f8bi3rvu43is7.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                auth(credentialResponse.credential)
                  .unwrap()
                  .then((response) => {
                    localStorage.setItem("idToken", response.idToken);
                    localStorage.setItem("user", response.userId);
                    window.location.reload();
                  })
                  .catch((error) => {
                    dispatch(
                      setMessage({
                        message: "You don't have an account in the app",
                        type: "error",
                      })
                    );
                  });
              }}
              onError={() => {
                dispatch(
                  setMessage({
                    message: "Log in failed!",
                    type: "error",
                  })
                );
              }}
            />
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
};

export default Login;
