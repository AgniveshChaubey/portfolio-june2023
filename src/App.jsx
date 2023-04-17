import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  redirect as Redirect,
} from "react-router-dom";

import { ThemeContext } from "./contexts/ThemeContext";
import { Main } from "./myPage/Main";
import { BlogPage } from "./myPage/BlogPage";
import { ProjectPage } from "./myPage/ProjectPage";
import { BackToTop } from "./components/BackToTop";
import ScrollToTop from "./utils/ScrollToTop";

import "./App.css";

function App() {
  // const { theme } = useContext(ThemeContext);
  return (
    <div className="app">
      <Router>
        <ScrollToTop/>
        {(() => {
          if (window.location.pathname === '/') {
            return <Route path="/" exact component={Main} />;
          } else if (window.location.pathname === '/blog') {
            return <Route path="/blog" exact component={BlogPage} />;
          } else if (window.location.pathname === '/projects') {
            return <Route path="/projects" exact component={ProjectPage} />;
          } else {
            return <Redirect to="/" />;
          }
        })()}
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
