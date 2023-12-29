import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import "./Components/styles/header.css";
import "./Components/styles/responsive.css"

import { FondoImagen } from "./Components/FondoImagen";
import { Container } from "@mui/material";
import { Titulo } from "./Components/Titulo";
import clientSocket from "./Network";

import NavBar from "./Components/NavBar";
import "./Components/styles/responsive.css";
import { useTranslation } from "react-i18next";
import GraficoPH from "./Components/GraficoPH";
import GraficoTemperatura from "./Components/GraficoTemperatura";
import GraficoTurbidez from "./Components/GraficoTurbidez";
import GraficoSolidos from "./Components/GraficoSolidos";





function App() {

  const [t] = useTranslation("global");
  

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
      console.log(data)

      // Recibe la data del servicio externo
      clientSocket.on("1/initialData", (data) => {
        setData({
          date: data ?[data.date]: [],
          pH: data ?[data.pH]:[],
          tds: data?[data.tds]:[],
          temperature: data?[data.temperature]:[],
          turbidity: data? [data.turbidity]:[],
        });
      });

      // Recibe la data del servicio externo
      clientSocket.on("1/pH", (pH) => {
        setData((previousData) => {
          

          return {
            ...previousData,
            pH: [...previousData.pH, pH],
          };
        });
      });

      clientSocket.on("1/date", (date) => {
        setData((previousData) => {
          

          return {
            ...previousData,
            date: [...previousData.date, date],
          };
        });
      });

      clientSocket.on("1/tds", (tds) => {
        setData((previousData) => {
          

          return {
            ...previousData,
            tds: [...previousData.tds, tds],
          };
        });
      });

      clientSocket.on("1/temperature", (temperature) => {
        setData((previousData) => {
         

          return {
            ...previousData,
            temperature: [...previousData.temperature, temperature],
          };
        });
      });

      clientSocket.on("1/turbidity", (turbidity) => {
        setData((previousData) => {
         

          return {
            ...previousData,
            turbidity: [...previousData.turbidity, turbidity],
          };
        });
      });
    });
  }, []);

  return (
    
    <div style={{margin:'0', display:'block', alignItems:'center', justifyContent:'center', width:'100%', margin:'0', padding:'0'}}>
      <NavBar/>

      <section>
        <FondoImagen  />
      </section>
      <Container  >
        <section id="GraficaPH" className="charts"  >
          <Titulo titulo="pH"  />
          <div class="box">
            <div class="chart">
              <GraficoPH 
                data={data.date.map((date, index) => ({
                    time: new Date(date).getTime(),
                    value: data.pH[index],
                }))}
            />
            </div>
            <div class="box-side">
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
        <section id="GraficaTemp" className="charts"  >
          <Titulo titulo={t("titles.temperature")} />

          <div class="box">
            <div class="chart">
            <GraficoTemperatura className= "chart"
              data={data.date.map((date, index) => ({
                  time: new Date(date).getTime(),
                  value: data.temperature[index],
              }))}
            />
            </div>

            <div class="box-side">
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


        <section id="GraficaTurb" className="charts" >
          <Titulo titulo={t("titles.turbidity")} />

          <div class="box">
            <div class="chart">
            <GraficoTurbidez 
              data={data.date.map((date, index) => ({
                  time: new Date(date).getTime(),
                  value: data.turbidity[index],
              }))}
            />
            </div>
            <div class="box-side">
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
        
        <section id="GraficaSolidos" className="charts" >
          <Titulo titulo={t("titles.solidity")}/>

          <div class="box">
            <div class="chart">
              <GraficoSolidos className= "chart"
                data={data.date.map((date, index) => ({
                    time: new Date(date).getTime(),
                    value: data.tds[index],
                }))}
              />
            </div>
            <div class="box-side">
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
