import React from "react";
import "./style.css";
import logo from "./img/logo.jpg"

export const Logo = () => {
  return (
    <a href="/" className="logo">
     <img src={logo} alt="logo" className="logo__pic"/>
    </a>
  );
}