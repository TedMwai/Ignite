import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Configure Redux
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import gamesReducers from "./reducers/gamesSlice";
import detailReducer from "./reducers/detailSlice";
// react router
import { BrowserRouter } from "react-router-dom";
// thunk
import { loadGames } from "./reducers/gamesSlice";
// Configure the store
const store = configureStore({
  reducer: {
    games: gamesReducers,
    detail: detailReducer,
  },
});

store.dispatch(loadGames());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
