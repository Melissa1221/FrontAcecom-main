import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import "./Components/styles/header.css";

import { FondoImagen } from "./Components/FondoImagen";
import { GraficaPh } from "./Components/GraficaPh";
import { GraficaTemperaura } from "./Components/GraficaTemperaura";
import { GraficaTurbidez } from "./Components/GraficaTurbidez";
import { Container } from "@mui/material";
import { GraficaSolidos } from "./Components/GraficaSolidos";
import { Titulo } from "./Components/Titulo";
import clientSocket from "./Network";

import NavBar from "./Components/NavBar";
import "./Components/styles/responsive.css";
import { useTranslation } from "react-i18next";





function App() {

  const [t, i18n] = useTranslation("global");
  

  const [data, setData] = useState({
    date: [],
    pH: [],
    tds: [],
    temperature: [],
    turbidity: [],
  });

  useEffect(() => {
    clientSocket.on("connect", () => {
      console.log(`Conexión exitosa al servidor`);

      // Emite un evento al servicio externo
      clientSocket.emit("1/initialData");

      // Recibe la data del servicio externo
      clientSocket.on("1/initialData", (data) => {
        setData({
          date: [data.date],
          pH: [data.pH],
          tds: [data.tds],
          temperature: [data.temperature],
          turbidity: [data.turbidity],
        });
      });

      // Recibe la data del servicio externo
      clientSocket.on("1/pH", (pH) => {
        setData((previousData) => {
          if (previousData.pH.length === 0) return previousData;

          return {
            ...previousData,
            pH: [...previousData.pH, pH],
          };
        });
      });

      clientSocket.on("1/date", (date) => {
        setData((previousData) => {
          if (previousData.date.length === 0) return previousData;

          return {
            ...previousData,
            date: [...previousData.date, date],
          };
        });
      });

      clientSocket.on("1/tds", (tds) => {
        setData((previousData) => {
          if (previousData.tds.length === 0) return previousData;

          return {
            ...previousData,
            tds: [...previousData.tds, tds],
          };
        });
      });

      clientSocket.on("1/temperature", (temperature) => {
        setData((previousData) => {
          if (previousData.temperature.length === 0) return previousData;

          return {
            ...previousData,
            temperature: [...previousData.temperature, temperature],
          };
        });
      });

      clientSocket.on("1/turbidity", (turbidity) => {
        setData((previousData) => {
          if (previousData.turbidity.length === 0) return previousData;

          return {
            ...previousData,
            turbidity: [...previousData.turbidity, turbidity],
          };
        });
      });
    });
  }, []);

  return (
    
    <div>
      <NavBar/>

      <section>
        <FondoImagen  />
      </section>
      <Container >
        <section id="GraficaPH" className="charts"  >
          <Titulo titulo="pH"  />
          <div className="box">
            <GraficaPh className="chart"
              data={data.date.map((date, index) => ({
                time: new Date(date).getTime(),
                value: data.pH[index],
              }))} 
            />
            <div className="box-side">
              <div className="number-box">
                <div id="circle-pH" className="circle">
                  <h2>{data.pH[data.pH.length - 1]}</h2>
                </div>
              </div>
              
              <div className="text-box">
                <p>{t("charts.description-ph")}</p>
              </div>
            </div>
          </div>
          
        </section>
        <section id="GraficaTemp">
          <Titulo titulo={t("titles.temperature")} />
          <div className="box">
            <GraficaTemperaura
              data={data.date.map((date, index) => ({
                time: new Date(date).getTime(),
                value: data.temperature[index],
              }))}
            />
            <div className="box-side">
              <div className="number-box">
                <div id="circle-temp" className="circle">
                  <h2>{data.temperature[data.temperature.length - 1]}</h2>
                </div>
              </div>
              <div className="text-box">
                <p>{t("charts.description-temperature")}</p>
              </div>
            </div>
          </div>
          
        </section>
        <section id="GraficaTurb">
          <Titulo titulo={t("titles.turbidity")} />
          <div className="box">
            <GraficaTurbidez
              data={data.date.map((date, index) => ({
                time: new Date(date).getTime(),
                value: data.turbidity[index],
              }))}
            />
            <div className="box-side">
              <div className="number-box">
                <div id="circle-turb" className="circle">
                  <h2>{data.turbidity[data.turbidity.length - 1]}</h2>
                </div>
              </div>
              <div className="text-box">
                <p>{t("charts.description-turbidity")}</p>
              </div>
            </div>
          </div>
        </section>
        <section id="GraficaSolidos">
          <Titulo titulo={t("titles.solidity")}/>
          <div className="box">
            <GraficaSolidos
              data={data.date.map((date, index) => ({
                time: new Date(date).getTime(),
                value: data.tds[index],
              }))}
            />
            <div className="box-side">

              <div className="number-box">
                <div id="circle-residuos" className="circle">
                  <h2>{data.tds[data.tds.length - 1]}</h2>
                </div>
              </div>

              <div className="text-box">
                <p>{t("charts.description-solidity")}</p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
    
  );
}

export default App;
