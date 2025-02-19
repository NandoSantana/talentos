import React from "react";
import Data from "./BlogData";
import { Box } from "@material-ui/core";
import Content from "../../componentes/Contents";
import IconsCircle from "../../componentes/icons";
import "./index.css";
const Matter = () => {
  var found = Data.find(function (element) {
    return element.id === 1;
  });
  return (
    <Box>
      <Box className="box-materia">
        <Box className="navbar-menu" />
        <Box>
          <img
            src={found.image}
            width="100%"
            height={600}
            className="img-banner"
            alt="imagem matéria"
          />
        </Box>
        <Box className="matter">
          <Box className="container-text-matter">
            <Box className="title-matter-container">
              <span className="title-matter">{found.title}</span>
              <span className="box-span-matter">
                {found.autor} | {found.data}
              </span>
            </Box>
            <Box className="text-matter">{found.text}</Box>
            <Box>
              <img
                src={found.image}
                className="img-matter"
                alt="imagem matéria"
              />
            </Box>
            <Box className="text-matter">{found.text}</Box>
            <Box className="text-matter">{found.text}</Box>
          </Box>
          <Box className="box-matter-content">
            <Content />
          </Box>
        </Box>
        <IconsCircle />
      </Box>
    </Box>
  );
};

export default Matter;
