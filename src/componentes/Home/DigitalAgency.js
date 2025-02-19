import React from "react";
import { Box } from "@material-ui/core";
import BannerAgency from "../../assets/ambient.png";
import "./styleHome.css";

function DigitalAgency() {
  return (
    <Box className="digital-agency">
      <Box className="banner-agency">
        <img
          src={BannerAgency}
          alt="Banner agência digital"
          className="img-agency"
        />
      </Box>
      <Box className="container-text-agency">
        <p>Dá uma olhada no site da Gis</p>
      </Box>
      <Box className="container-btn">
        <Box>
          <a
            href="https://gestaointeligentesoftware.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="btn-process btn-agency">
              Clique aqui
            </button>
          </a>
        </Box>
      </Box>
    </Box>
  );
}
export default DigitalAgency;
