import React from 'react'
import CalculadoraIMC from './components/CalculadoraIMC'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Fotter from './components/Fotter';
import "./global.css"

export default function App() {
  return (
    <div>
      <Header/>
      <CalculadoraIMC/>
      <Fotter/>
    </div>
  )
}
