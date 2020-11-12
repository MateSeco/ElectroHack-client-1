import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Producto from "./components/Producto/Producto";
import Catalogo from "./components/Catalogo/Catalogo";
import Registro from "./components/LoginRegistro/Registro";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/catalogo/:slug" component={Catalogo} />
        <Route exact path="/producto/:slug" component={Producto} />
        <Route exact path="/registro" component={Registro} />
      </Switch>
    </Router>
  );
}

export default App;
