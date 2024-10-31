import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="cabecalho">
      <img src={logo} alt="logo" />
      <h1>Calculadora IMC</h1>
    </header>
  );
}
