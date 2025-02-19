import React from "react";
import { Box } from "@material-ui/core";
import "./styleHome.css";
import Maos from "../../assets/Maos.png";
import Ideia from "../../assets/Idea.png";
import Global from "../../assets/Global.png";
function OurNumbers() {
  return (
    <Box className="container-numbers">
      <Box>
        <p className="titulo-numbers">Conheça nossos números</p>
      </Box>
      <Box className="cards-numbers">
        <Box className="container-cards">
          <Box className="card-nunbers">
            <Box>
              <img src={Maos} alt="icone de mãos dadas" />
            </Box>
            <Box className="texto-card-nunbers">
              <p>Número de parceiros</p>
            </Box>
          </Box>
        </Box>
        <Box className="container-cards">
          <Box className="card-nunbers">
            <Box>
              <img src={Ideia} alt="icone de mãos dadas" />
            </Box>
            <Box className="texto-card-nunbers">
              <p>Número de parceiros</p>
            </Box>
          </Box>
        </Box>
        <Box className="container-cards">
          <Box className="card-nunbers">
            <Box>
              <img src={Global} alt="icone de mãos dadas" />
            </Box>
            <Box className="texto-card-nunbers">
              <p>Número de parceiros</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default OurNumbers;
