import React from "react";
import {render} from "react-dom";
import App from "./App";
import reducer from "./redux/store";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {BrowserRouter} from 'react-router-dom';

const stores = createStore(reducer);

render(
  <BrowserRouter>
    <Provider store={stores}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
