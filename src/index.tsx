import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/counter/Counter";
import MuiMode from "./components/mui/MuiMode";
import "./index.css";
import AppProviders from "./providers/app-providers";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProviders>
      <div className="App">
        <Counter />
        <MuiMode />
      </div>
    </AppProviders>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
