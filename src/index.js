import React from "react";
// import from 'react-dom';
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeContextProvider from "./contexts/ThemeContext";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);

reportWebVitals();
