import React from "react";
import { Box } from "@material-ui/core";
// import Arrows from "./Arrows";
import "./styleHome.css";
import { Button } from "@material-ui/core";
// import ArrowsDown from "../../assets/ArrowsDown.png";
import { Link as RouterLink } from "react-router-dom";
import "./styleHome.css";

function Introduction() {
  return (
    <Box className="introdution">
      <Box className="containerOqueFazemos">
        <Box className="titulo">Como fazemos?</Box>

        <Box className="text-introdution">
          <p>
            Possibilitamos a contratação e a alocação de squads ou profissionais
            para ajudar seus negócios.
          </p>
        </Box>
        <Box className=" text-introdution1">
          <p>
            Trabalhamos com agilidade, respeito e confiança para entregar
            excelência aos clientes.
          </p>
        </Box>
      </Box>
      <Box className="container-botoes">
        <Box className="box-botao">
          {" "}
          <Button component={RouterLink} to="/service">
            <Box className="btn1">
              <p>Sou empresa</p>
            </Box>
          </Button>
        </Box>
        <Box className="box-botao">
          <Button component={RouterLink} to="/agencyDigital">
            <Box className="btn1">
              <p>Sou talento</p>
            </Box>
          </Button>
        </Box>
      </Box>
      {/*Box Imagens seta*/}
      {/*Box Imagem Estrela */}
    </Box>
  );
}
export default Introduction;
