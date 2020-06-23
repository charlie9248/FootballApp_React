import React from "react";
import Navbar from "./components/Navbar";
import PLayersPage from "./components/PlayersPage";
import Squad from "./components/Squad";
import Modal from "./components/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={PLayersPage} />
        <Route path="/squad" component={Squad} />
      </Switch>
      <Modal />
    </>
  );
};

export default App;
