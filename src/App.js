import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ThemeContext } from "./contexts/ThemeContext";
import { Main, BlogPage, ProjectPage } from "./pages";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BackToTop } from "./components";
import ScrollToTop from "./utils/ScrollToTop";

import "./App.css";
import Login from "./pages/Login/Login";

function App() {
  const { theme, isLoggedIn } = useContext(ThemeContext);

  console.log(
    "%cPORTFOLIO - AGNIVESH",
    `color:${theme.primary}; font-size:50px`
  );
  console.log(
    "%chttps://github.com/AgniveshChaubey",
    `color:${theme.tertiary}; font-size:20px`
  );
  console.log(isLoggedIn);

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="login" element={<Login />} />
          {isLoggedIn ? <Route path="/dashboard/*" element={<Dashboard />} /> : <Route path="/dashboard/*" element={<h1>Please login to Access!</h1>} /> }
          {/* <Route path="/dashboard/*" element={<Dashboard />} /> */}
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
        <BackToTop />
      </Router>
    </div>
  );
}

export default App;
