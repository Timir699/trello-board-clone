import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import BoardContextProvider from "./context/BoardContextProvider";
import TaskContextProvider from "./context/TaskContextProvider";
import CardContextProvider from "./context/CardContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BoardContextProvider>
        <TaskContextProvider>
          <CardContextProvider>
            <App />
          </CardContextProvider>
        </TaskContextProvider>
      </BoardContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
