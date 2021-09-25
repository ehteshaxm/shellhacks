import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { Navbar } from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./pages/LoginForm";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <main>
          <Route path="/" exact component={LoginForm} />
          <Route path="/dashboard" exact component={Dashboard} />
        </main>
      </Router>
    </Provider>
  );
}

export default App;
