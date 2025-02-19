import React from "react";
import { Box } from "@material-ui/core";
import BannerTalent from "../../assets/BannerTalent.png";
import "./styleHome.css";

function ProgramTalent() {
  return (
    <Box className="program-talent">
      <Box className="banner-talent">
        <img
          src={BannerTalent}
          alt="Banner Talent Program"
          className="img-talent"
        />
      </Box>
      <Box className="container-program">
        <p>Gis, Estou aqui!</p>
      </Box>
      <Box className="text-talent text-right titulo-azul">
        <p>Sou uma empresa e quero contratar ou alocar uma equipe GIS.</p>
      </Box>
      <Box className="text-talent text-left titulo-rosa">
        <p>Sou um profissional e quero fazer parte de uma equipe GIS.</p>
      </Box>
      <Box className="text-talent-program titulo-azul">
        <p>Essa é a sua hora!</p>
      </Box>
      <Box className="container-btn">
        <a href="/cadasdrar">
          <button type="button" className="btn-talent">
            Clique aqui e saiba mais!
          </button>
        </a>
      </Box>
    </Box>
  );
}
export default ProgramTalent;
