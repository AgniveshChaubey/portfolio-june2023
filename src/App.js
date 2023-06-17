import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from 'react-router';

import { ThemeContext } from "./contexts/ThemeContext";
import { Main, BlogPage, ProjectPage } from "./pages";
import Dashboard from "./pages/Dashboard/Dashboard";
// import {BlogPage} from './pages/BlogPage/BlogPage';
// import ProjectPage from './pages/ProjectPage/ProjectPage';
// import Main from './pages/Main/Main'
import { BackToTop } from "./components";
import ScrollToTop from "./utils/ScrollToTop";

import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  console.log(
    "%cPORTFOLIO - AGNIVESH",
    `color:${theme.primary}; font-size:50px`
  );
  console.log(
    "%chttps://github.com/AgniveshChaubey",
    `color:${theme.tertiary}; font-size:20px`
  );

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          {/* <Route path="dashboard" element={<BlogPage />} /> */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <BackToTop />
      </Router>
    </div>
  );
}

export default App;
