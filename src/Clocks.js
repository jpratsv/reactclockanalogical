//import React, { useState } from "react";
import "./Clocks.css";
import { useState } from "react";

function reloj() {
  let time = new Date();

  let horas = time.getHours();
  let minutos = time.getMinutes();
  let segundos = time.getSeconds();

  let dia = time.getDate();
  let mes = time.getMonth() + 1;
  let ano = time.getFullYear();

  let porcentajeHoras = 0;
  let porcentajeMinutos = 0;
  let porcentajeSegundos = 0;

  if (horas >= 12) {
    porcentajeHoras = (horas / 12) * 360;
  } else {
    porcentajeHoras = (horas / 24) * 360;
  }

  porcentajeHoras += (minutos / 60) * 30;
  porcentajeMinutos = (minutos / 60) * 360;
  porcentajeSegundos = (segundos / 60) * 360;

  document.getElementById("horas").style.transform =
    "rotate(" + porcentajeHoras + "deg)";

  document.getElementById("minutos").style.transform =
    "rotate(" + porcentajeMinutos + "deg)";

  document.getElementById("segundos").style.transform =
    "rotate(" + porcentajeSegundos + "deg)";

  document.getElementById("p-content").innerHTML =
    horas + ":" + minutos + ":" + segundos;

  document.getElementById("p-fecha").innerHTML = dia + "/" + mes + "/" + ano;
}

export default function Clock() {
  const [visible, setVisible] = useState("visible");

  setInterval(reloj, 1000);

  const toggle = () => {
    setVisible((actual) => (actual === "visible" ? "oculto" : "visible"));
  };

  return (
    <>
      <div className="flex">
        <div className="contenido">
          <div className="reloj">
            <img
              src={process.env.PUBLIC_URL + "/img/aguja.png"}
              id="horas"
              alt="horas"
            ></img>
            <img
              src={process.env.PUBLIC_URL + "/img/agujaMinutos.png"}
              id="minutos"
              alt="minutos"
            ></img>
            <img
              src={process.env.PUBLIC_URL + "/img/agujaSegundos.png"}
              id="segundos"
              alt="segundos"
            ></img>
          </div>
        </div>
        <div className="contenido">
          <h4 id="h4-content">¡Hora actual!</h4>
          <p id="p-content"></p>
          <p id="p-fecha" className={visible}></p>
          <br></br>
          <button onClick={toggle}>Data, M/O</button>
        </div>
      </div>
    </>
  );
}
