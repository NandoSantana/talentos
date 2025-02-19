import React from "react";
import { Box } from "@material-ui/core";
import LogoDemarco from "../../assets/demarcoPB.png";
import LogoDiefra from "../../assets/logo_diefraPB.png";
import LogoFalcon from "../../assets/falconPB.png";
import LogoUnimed from "../../assets/unimedPB.png";
import LogoAmbisig from "../../assets/ambisigPB.png";
import LogoLoad from "../../assets/LoadPB.png";

import "./styleHome.css";

const Image = [
  {
    img: LogoDemarco
  },
  {
    img: LogoDiefra
  },
  {
    img: LogoFalcon
  },
  {
    img: LogoAmbisig
  },
  {
    img: LogoLoad
  },
  {
    img: LogoUnimed
  }
];

function Partners() {
  return (
    <Box className="container-partners">
      <Box className="title card-azul">
        <Box>
          <p>Alguns de nossos parceiros que confiam em nós</p>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Box className="logo-partners">
          {Image.map((item) => (
            <Box className="box-partners">
              <img src={item.img} alt="Logo parceiros" />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Partners;
