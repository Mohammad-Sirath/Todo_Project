import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Course from "./pages/course/Course";
import Login from "./pages/login/Login";
import Panel from "./pages/panel/Panel";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/panel" element={<Panel />} />
        {/* <Route path="/course" element={<Course />} /> */}
        <Route path="/course/:courseId" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
