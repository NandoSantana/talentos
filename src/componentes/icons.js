import React from "react";
import { WhatsApp, Facebook, Instagram, Twitter } from "@material-ui/icons";
import { Box, ButtonBase } from "@material-ui/core";
import "../pages/Style.css";

const Icons = [
  {
    icon: (
      <a
        target="_blank"
        rel="noreferrer"
        href="https://api.whatsapp.com/send?phone=5531985217476"
      >
        <WhatsApp style={{ color: "#FFF", fontSize: 40 }} href="" />
      </a>
    )
  },
  {
    icon: (
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/GiGicomercial"
      >
        <Facebook style={{ color: "#FFF", fontSize: 40 }} />
      </a>
    )
  },
  {
    icon: (
      <a
        href="https://www.instagram.com/gestaointeligentesoftware/"
        target="_blank"
        rel="noreferrer"
      >
        <Instagram style={{ color: "#FFF", fontSize: 40 }} />
      </a>
    )
  },
  {
    icon: (
      <a
        href="https://twitter.com/gestao_software"
        target="_blank"
        rel="noreferrer"
      >
        <Twitter style={{ color: "#FFF", fontSize: 40 }} />
      </a>
    )
  }
  /*{
    icon: (
      <a target="_blank" rel="noreferrer" href>
        <YouTube style={{ color: "#FFF", fontSize: 40 }} />
      </a>
    )
  },
  {
    icon: (
      <a target="_blank" rel="noreferrer" href>
        <img src={Spotify} alt="icone spotify" width={40} height={40} />
      </a>
    )
  }*/
];

const IconsCircle = () => {
  return (
    <Box className="container-icons">
      {Icons.map((item, index) => (
        <ButtonBase style={{ borderRadius: "50%" }}>
          <Box className="box-icons01" Key={index}>
            <Box>{item.icon}</Box>
          </Box>
        </ButtonBase>
      ))}
    </Box>
  );
};
export default IconsCircle;
