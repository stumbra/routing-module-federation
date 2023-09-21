import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/remote2">
      <App />
    </BrowserRouter>
  </StrictMode>
);
