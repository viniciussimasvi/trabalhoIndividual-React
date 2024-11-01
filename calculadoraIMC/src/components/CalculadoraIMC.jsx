import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./Footer.css";
import "./Resultado.css";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CalculadoraIMC() {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [texto, setTexto] = useState();

  function calcularIMC(e) {
    e.preventDefault();
    var resultado = peso / (altura * altura);
    var resultadoFormat = resultado.toFixed(2);

    if (peso == 0 && altura != null) {
      setTexto(`Dados inválidos`);
    } else if (altura == 0 && peso != null) {
      setTexto(`Dados inválidos`);
    } else {
      if (resultadoFormat < 18.5) {
        setTexto(` ${resultadoFormat} - Abaixo do peso!`);
      } else if (resultadoFormat >= 18.5 && resultadoFormat <= 24.99) {
        setTexto(` ${resultadoFormat} - Peso ideal!`);
      } else if (resultadoFormat >= 25 && resultadoFormat <= 29.99) {
        setTexto(` ${resultadoFormat} - Sobrepeso!`);
      } else if (resultadoFormat >= 30 && resultadoFormat <= 34.99) {
        setTexto(` ${resultadoFormat} - Obesidade grau 1!`);
      } else if (resultadoFormat >= 35 && resultadoFormat <= 39.99) {
        setTexto(` ${resultadoFormat} - Obesidade grau 2!`);
      } else if (resultadoFormat >= 40) {
        setTexto(` ${resultadoFormat} - Obesidade extrema!`);
      }
    }
    return texto(setTexto);
  }

  return (
    <div className="container-fluid">
      <header className="cabecalho">
        <img src={logo} alt="logo" />
        <h1>Calculadora IMC</h1>
      </header>

      <form onSubmit={calcularIMC}>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="peso">
              <b>Peso:</b>
            </label>
            <input
              id="peso"
              type="text"
              name="peso"
              className="my-3 form-control"
              placeholder="Digite seu peso"
              onChange={(e) => setPeso(e.target.value)}
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="altura">
              {" "}
              <b>Altura:</b>
            </label>
            <input
              id="altura"
              type="text"
              name="altura"
              className="my-3 form-control"
              placeholder="Digite sua altura (com ponto flutuante)"
              onChange={(e) => setAltura(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Calcular
          </button>
        </div>

        <p className="resultado">
          <b>Resultado </b>: {texto}
        </p>
      </form>

      <footer className="rodape">
        <p>
          &copy; Desenvolvido por Vinícius Simas Vimercati| React | Residência
          TIC/Software - Serratec 2024.2
        </p>
      </footer>
    </div>
  );
}
