import { Component } from "react";
import axios from "axios";
import Router from "./Router";
import Nav from "./Nav";

function App() {
  return (
    <>
      <Nav />
      <Router />
    </>
  );
}

export default App;