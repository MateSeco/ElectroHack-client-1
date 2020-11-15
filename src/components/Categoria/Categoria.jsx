import React, { useEffect, useState } from "react";
import "./Categoria.css";
import axiosCall from "../../utils/axiosCall";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ListaProductos from "../ListaProductos/ListaProductos";
import { useParams } from "react-router-dom";

export default function Catalogo() {
  const [categoria, setCategoria] = useState({});
  const [productos, setProductos] = useState([]);
  const params = useParams();

  useEffect(() => {
    axiosCall(`/categories/${params.slug}`, "get").then((res) => {
      setCategoria(res.data);
      setProductos(res.data.productList);
    });
  }, [params.slug]);

  return (
    <div>
      <header className="background">
        <NavBar className="container" />
      </header>
      <main>
        {categoria.type && (
          <div className="container">
            <div className="titulo">
              <h1>Catálogo</h1>
              <h2>{categoria.type}</h2>
              <h3>{categoria.description}</h3>
              <img src={categoria.image} alt="Imagen de la categoria" />
            </div>
            <div className="links">
              <button className="link">Todos</button>
              <button className="link">Todos</button>
              <button className="link">Todos</button>
              <button className="link">Todos</button>
              <button className="link">Todos</button>
            </div>
            <div className="lista background">
              <ListaProductos productos={productos} />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
