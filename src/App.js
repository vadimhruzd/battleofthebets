import { Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./pages/ProfilePage";
import Auth from "./pages/Auth";

const isLoggedIn = localStorage.getItem("user");

function App() {
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
    </>
  );
}

export default App;
