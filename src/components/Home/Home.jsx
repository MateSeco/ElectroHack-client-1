import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import ListaProductos from "../ListaProductos/ListaProductos";
import Footer from "../Footer/Footer";
import axiosCall from "../../utils/axiosCall";
import "./Home.css";

export default function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axiosCall("/products", "get", null, { outstanding: true}).then((res) =>
      setProductos(res.data)
    );
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Banner />
        <ListaProductos productos={productos} />
      </main>
      <Footer />
    </>
  );
}
