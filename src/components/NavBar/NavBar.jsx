import React from "react";

import {CartWidget} from "../CartWidget/CartWidget";



export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-lg-top">
     <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-evenly" id="navbarSupportedContent">
            <div className="navbar-nav">
                <a className="nav-link px-5 fst-italic" href="../index.html">PRODUCTOS</a>
                <a className="nav-link px-5 fst-italic" href="company.html">COMPRAR</a>
                <a className="nav-link px-5 fst-italic" href="news.html">MEDIOS DE PAGO</a>
                <a className="nav-link px-5 fst-italic" href="contact.html"><CartWidget /></a>  
            </div>
        </div>
     </div>
    </nav>
  );
};
