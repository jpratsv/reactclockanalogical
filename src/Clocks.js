import React, { useState } from "react";
import "./Clocks.css";

function reloj() {
  let time = new Date();

  let horas = time.getHours();
  let minutos = time.getMinutes();
  let segundos = time.getSeconds();

  let porcentajeHoras = 0;
  let porcentajeMinutos = 0;
  let porcentajeSegundos = 0;

  if (horas >= 12) {
    porcentajeHoras = (horas / 12) * 360;
  } else {
    porcentajeHoras = (horas / 24) * 360;
  }

  porcentajeHoras = minutos + (minutos / 60) * 30;
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
}

export default function Clock() {
  const [inputTime, setInputTime] = useState("");

  setInterval(reloj, 1000);

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
        </div>
      </div>
    </>
  );
}
