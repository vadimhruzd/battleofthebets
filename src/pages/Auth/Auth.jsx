import Profile from "../ProfilePage";
import Login from "./Login";

import { Routes, Route, Navigate } from "react-router-dom";

const Auth = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default Auth;
