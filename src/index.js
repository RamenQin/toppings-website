import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";

import './index.css';

Modal.setAppElement("#root");

// ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App />
// </Router>, 
// document.getElementById("root")
// );

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
