import React, {useState, useEffect} from "react";
import NavBar from "../NavBar/NavBar";
//import producto from "../../img/producto1.jpg";
import Footer from "../Footer/Footer";
import "./Producto.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import axiosCall from "../../utils/axiosCall"

export default function Producto() {
  const [producto, setProducto] = useState([])
  const params = useParams();

useEffect(() => {
  axiosCall(`/products/${params.slug}`, "get")
  .then((res) => setProducto(res.data))
}, [])

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        {producto.image && <div className="container">
          <div className="row p-3">
            <div className="col-lg-9">
              <div class="card mb-3 producto">
                <img src={producto.image} class="card-img-top img" alt="..." />
                <div class="card-body descripcion">
                  <h2 class="card-title ">Características</h2>
                  <p>{producto.description}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="comprar-header">
                {/* <h5>PANAVOX</h5> */}
                <h4>{producto.name}</h4>
                <div className="stock">
                  {producto.stock > 0 ? <small> {producto.stock} Stock disponible</small> : <small>No hay Stock</small>}
                </div>
              </div>
              <div className="comprar-body">
                <h2>
                  ${producto.price} <small>Contado</small>
                </h2>
              </div>
              <div class="comprar-footer">
                <button>AGREGAR AL CARRITO</button>
              </div>
            </div>
          </div>
        </div>}
      </main>
      <Footer />
    </div>
  );
}
