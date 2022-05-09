import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import App from "./App";
import { bankingReducer } from "./reducers/bankingReducer";
import { Provider } from "react-redux";
const store = createStore(bankingReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
