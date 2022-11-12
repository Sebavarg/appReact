import React from 'react'
import style from "../NavBar/navBar.css";
import {CartWidget} from "../CartWidget/CartWidget";
import logo from "../assets/logo.svg";

export const NavBar = () => {
  return (
    <nav>
      <a className="navbar-brand" href="#">
        <img src={logo}></img>
      </a>
      <ul>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Favoritos</a></li>
        <li><a href="#">Promociones y Cupones </a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <a href="#"><CartWidget /></a>
   </nav>
  )
}
