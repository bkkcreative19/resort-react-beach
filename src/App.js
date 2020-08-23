import React from "react";
import Home from "./pages/Home/Home";
import Rooms from "./pages/Rooms/Rooms";
import SingleRoom from "./pages/SingleRoom/SingleRoom";
import Error from "./pages/Error/Error";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms/' component={Rooms} />
        <Route exact path='/rooms/:slug' component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
