import { Route, Routes } from "react-router-dom";
import Course from "./components/page/Course";
import Home from "./components/page/Home";
import Login from "./components/page/Login";
import SignUp from "./components/page/SignUp";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="course" element={<Course />} />
      {/*  <Route path="/*" element={<Home />}>
        <Route path="course" element={<Course />} />
      </Route> */}
    </Routes>
  );
};
