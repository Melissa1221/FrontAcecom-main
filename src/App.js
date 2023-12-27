import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import "./Components/styles/header.css";
import { Header } from "./Components/Header";
import { FondoImagen } from "./Components/FondoImagen";
import { GraficaPh } from "./Components/GraficaPh";
import { GraficaTemperaura } from "./Components/GraficaTemperaura";
import { GraficaTurbidez } from "./Components/GraficaTurbidez";
import { Container } from "@mui/material";
import { GraficaSolidos } from "./Components/GraficaSolidos";
import { Titulo } from "./Components/Titulo";
import clientSocket from "./Network";
import { createTheme } from '@mui/material/styles';
import NavBar from "./Components/NavBar";
import "./Components/styles/responsive.css";





function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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
        <section id="GraficaPH" className="charts" >
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
                <p>Conocer el pH del agua es esencial para asegurar su calidad, proteger la salud y mantener el equilibrio de los ecosistemas acuáticos, además de influir en la eficacia del tratamiento de aguas y la agricultura.</p>
              </div>
            </div>
          </div>
          
        </section>
        <section id="GraficaTemp">
          <Titulo titulo="Temperatura" darkMode={darkMode} />
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
                <p>La temperatura del agua es un factor muy importante para la vida en los ríos, lagos y mares. En los ríos, por ejemplo, la temperatura del agua influye en la cantidad de oxígeno que puede disolverse en ella.</p>
              </div>
            </div>
          </div>
          
        </section>
        <section id="GraficaTurb">
          <Titulo titulo="Turbidez" darkMode={darkMode}/>
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
                <p>La turbidez es una medida de la claridad del agua. La turbidez en el agua es causada por partículas en suspensión que interfieren con la dispersión de la luz. Estas partículas pueden ser arcilla, limo, algas, materia orgánica, materia inorgánica, etc.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="GraficaSolidos">
          <Titulo titulo="Residuos Sólidos" darkMode={darkMode}/>
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
                <p>Los sólidos totales disueltos (TDS) son una medida de la combinación de todas las partículas orgánicas e inorgánicas disueltas en el agua. Los sólidos totales disueltos son una medida de la calidad del agua.</p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
    
  );
}

export default App;
