import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/theme.js";
import "./sass/main.scss";
import { Provider } from "react-redux";
import { store } from "./utils/store/store.js";
import Router from "./routes/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
