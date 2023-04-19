import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";

import store from "./store/store";

import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css'; 

import { Provider } from "react-redux";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer
          theme="dark"
          position="top-right"
          autoClose={2000}
          closeOnClick
          rtl={false}
          pauseOnHover={false}
        />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
