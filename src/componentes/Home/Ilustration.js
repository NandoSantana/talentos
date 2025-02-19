import React from "react";
import { Box } from "@material-ui/core";
import "./styleHome.css";
import Ilustracao from "../../assets/Ilustracao.png";
import Ellipse from "../../assets/Ellipse.png";

function IlustrationHome() {
  return (
    <Box className="containerIlustracao">
      <Box className="bannerImg">
        <Box>
          <img
            className="ilustracao-img"
            src={Ilustracao}
            alt="Ilustração de uma bonequinha sentada mostrando um quandro com gráficos"
          />
        </Box>
        <Box>
          <img
            className="ellipse-img"
            src={Ellipse}
            alt="Ellipse que serve de sobra para a ilustração acima"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default IlustrationHome;
