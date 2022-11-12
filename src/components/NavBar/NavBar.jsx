import React from 'react'
import style from "../NavBar/navBar.css";
import {CartWidget} from "../CartWidget/CartWidget";
import logo from "../assets/logo.svg";

export const NavBar = () => {
  return (
    <nav>
      <div>
       <a  href="#">
         <img className="navbar-brand" src={logo}></img>
        </a>
      </div>
      <ul className='navBarMenu'>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Favoritos</a></li>
        <li><a href="#">Promociones y Cupones </a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <div>
        <a className="logo" href="#"><CartWidget /></a>
      </div>
   </nav>
  )
}
