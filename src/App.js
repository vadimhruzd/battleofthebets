import { Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./pages/ProfilePage";
import Auth from "./pages/Auth";
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const isLoggedIn = localStorage.getItem("user");
function App() {
  const message = useSelector((state) => state.message);

  useEffect(() => {
    if (!message) {
      return;
    }
    toast(message.message, {
      type: message.type,
    });
  }, [message]);

  return (
    <>
      {!isLoggedIn ? (
        <Auth />
      ) : (
        <div className="App">
          <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="/" element={<Profile />} />
            <Route path="*" element={<Profile to="/" />} />
          </Routes>
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        transition={Slide}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
