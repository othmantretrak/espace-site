import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import App from "./App";
//import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Atkinson Hyperlegible",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

/* ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
); */
ReactDOM.render(<App />, document.getElementById("root"));
