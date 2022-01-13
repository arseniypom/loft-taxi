import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { theme } from "loft-taxi-mui-theme"; // Импортируем саму тему
import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
