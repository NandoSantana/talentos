import React from "react";
import { Box } from "@material-ui/core";
// import HomeImg from "../../assets/homeTalent.png";
import files from "../../assets/filesBase64";

import "./styleHome.css";

function BannerHome() {
  return (
    <Box className="banner">
      <Box className="background" />
      <img src={files.appLogo} className="img-banner1" alt="" />

      <Box className="containerTexto">
        <Box className="containerTitulo tecnologia">GIS, estou aqui!</Box>

        {/* <Box className="texto tecnologia">
          A GIS é uma plataforma que une a experiência à técnologia de inovação
          por meio de pessoas. Desenvolvemos soluções para ajudar seu negócio a
          se tornar referência na área.
        </Box> */}
        {/* <Box> */}
        {/* <Button component={RouterLink} to="/contact"> */}
        <Box className="containerSubTitle subTitle">Respiramos inovação</Box>
        {/* </Button> */}
        {/* </Box> */}
      </Box>
    </Box>
  );
}

export default BannerHome;
