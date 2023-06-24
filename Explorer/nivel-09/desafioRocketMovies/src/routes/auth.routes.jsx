import { Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/signin";
import { SignUp } from "../pages/signup";

export function AuthRoutes() {
  return (
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
  );
}
