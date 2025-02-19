import React from "react";
import { Box } from "@material-ui/core";
import HomeImg from "../../assets/sobre.png";

import "./styleHome.css";

function BannerAbout() {
  return (
    <Box className="banner" sx={{ height: "100%" }}>
      <img src={HomeImg} className="img-banner1" alt="" />

      <Box className="containerTexto1">
        <Box className="containerTitulo1 ">
          Conheça um pouco mais sobre nosso Gis, estou aqui!
        </Box>
      </Box>
    </Box>
  );
}

export default BannerAbout;
