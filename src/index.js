import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { RoomProvider } from "./context/context";

ReactDOM.render(
  <RoomProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </RoomProvider>,
  document.getElementById("root")
);
