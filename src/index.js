import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./context/ChatProvider";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if(process.env.NODE_ENV==='production') disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <ChatProvider>
          <App />
        </ChatProvider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
