import React from "react";
import { Box } from "@material-ui/core";
import RetangleAzulG from "../../assets/RectangleAzulG.png";
import RetangleAzulP from "../../assets/RectangleAzulP.png";
import RetangleRosaG from "../../assets/RectangleRosaG.png";
import RetangleRosaP from "../../assets/RectangleRosaP.png";
import PolygonAzul from "../../assets/PolygonAzul.png";
import PolygonRosa from "../../assets/PolygonRosa.png";
import "./styleHome.css";
function Company() {
  return (
    <Box className="company">
      <Box className="containerCard">
        {/*Box Missão*/}
        <Box className="box-card">
          {/*ilustração card */}
          <Box className="ilustracao-card1">
            <Box className="retangulo-rosaP">
              <img src={RetangleRosaP} alt="retângulo Pequeno rosa" />
            </Box>
            <Box className="retangulo-azulG">
              <img src={RetangleAzulG} alt="retângulo grande azul" />
            </Box>
          </Box>
          {/*ilustração card */}
          <Box className="ilustracao-card2">
            <Box className="retangulo-rosaP">
              <img src={RetangleRosaP} alt="retângulo Pequeno rosa" />
            </Box>
            <Box className="retangulo-azulG">
              <img src={RetangleAzulG} alt="retângulo grande azul" />
            </Box>
          </Box>
          <Box>
            <p className=" titulo-card card-azul">Missão</p>
          </Box>
          <Box className="conteudo-card card-azul">
            <Box className="texto-card card-azul">
              <p>
              Nossa missão é entregar soluções inovadoras, que geram e agregam valor ao seu negócio.
              </p>
            </Box>
          </Box>
          <Box className="poligono-img">
            <Box>
              <img src={PolygonAzul} alt="poligono Azul" className="poligono" />
            </Box>
          </Box>
        </Box>
        {/*Box Visão*/}
        <Box className="box-card">
          {/*ilustração card */}
          <Box className="ilustracao-card1">
            <Box className="retangulo-rosaP">
              <img src={RetangleAzulP} alt="retângulo Pequeno rosa" />
            </Box>
            <Box className="retangulo-azulG">
              <img src={RetangleRosaG} alt="retângulo grande azul" />
            </Box>
          </Box>
          {/*ilustração card */}
          <Box className="ilustracao-card2">
            <Box className="retangulo-rosaP">
              <img src={RetangleAzulP} alt="retângulo Pequeno rosa" />
            </Box>
            <Box className="retangulo-azulG">
              <img src={RetangleRosaG} alt="retângulo grande azul" />
            </Box>
          </Box>
          <Box>
            <p className=" titulo-card card-rosa">Visão</p>
          </Box>
          <Box className="conteudo-card card-rosa">
            <Box className="texto-card card-rosa">
              <p>
              Buscamos ser referência e construir juntos um ambiente tecnológico rico em qualidade, gestão e segurança..
              </p>
            </Box>
          </Box>
          <Box className="poligono-img">
            <Box>
              <img src={PolygonRosa} alt="poligono Azul" className="poligono" />
            </Box>
          </Box>
        </Box>
        {/*Box Valores*/}
        <Box className="box-card">
          {/*ilustração card */}
          <Box className="ilustracao-card1">
            <Box className="retangulo-rosaP">
              <img src={RetangleRosaP} alt="retângulo Pequeno rosa" />
            </Box>
            <Box className="retangulo-azulG">
              <img src={RetangleAzulG} alt="retângulo grande azul" />
            </Box>
          </Box>
          {/*ilustração card */}
          <Box className="ilustracao-card2">
            <Box className="retangulo-rosaP">
              <img src={RetangleRosaP} alt="retângulo Pequeno rosa" />
            </Box>
            <Box className="retangulo-azulG">
              <img src={RetangleAzulG} alt="retângulo grande azul" />
            </Box>
          </Box>
          <Box>
            <p className=" titulo-card card-azul">Valores</p>
          </Box>
          <Box className="conteudo-card card-azul">
            <Box className="texto-card card-azul">
              <p>
              Somos transparentes, flexíveis e colaborativos, uma vez que valorizamos as pessoas em primeiro lugar.
              </p>
            </Box>
          </Box>
          <Box className="poligono-img">
            <Box>
              <img src={PolygonAzul} alt="poligono Azul" className="poligono" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Company;
