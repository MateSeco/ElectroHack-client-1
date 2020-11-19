import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Producto from "./components/Producto/Producto";
import Registro from "./components/LoginRegistro/Registro";
import Categoria from "./components/Categoria/Categoria";
import Login from "./components/LoginRegistro/Login";
import Pedidos from "./components/Pedidos/Pedidos";
import DetallesPedido from "./components/DetallesPedido/DetallesPedido";
import AdminProductos from "./components/AdminProductos/AdminProductos";
import AdminHome from "./components/AdminProductos/AdminHome";
/* import AgregarProducto from "./components/AdminProductos/AgregarProducto"; */
import AgregarProductos from "./components/AdminProductos/AgregarProductos";
import ModificarProducto from "./components/AdminProductos/ModificarProducto";
import AdminRegistro from "./components/AdminCuenta/AdminRegistro";
import AdminLogin from "./components/AdminCuenta/AdminLogin";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route exact path="/categoria/:slug" component={Categoria} />
        <Route exact path="/producto/:slug" component={Producto} />
        <Route exact path="/pedidos" component={Pedidos} />
        <Route exact path="/pedidos/:id" component={DetallesPedido} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin/" component={AdminHome} />
        <Route exact path="/admin/productos" component={AdminProductos} />
        <Route
          exact
          path="/admin/productos/crear"
          component={AgregarProductos}
        />
        <Route
          exact
          path="/admin/productos/modificar/:slug"
          component={ModificarProducto}
        />
        {/*  <Route exact path="/admin/categoria" component={AgregarProducto} /> */}
        <Route exact path="/admin/login" component={AdminLogin} />
        <Route exact path="/admin/registro" component={AdminRegistro} />
      </Switch>
    </Router>
  );
}

export default App;
