import * as React from "react";
import { Box, ButtonBase } from "@mui/material";
import BannerBlog from "../../assets/ImgBlog.png";
import "../Style.css";
import { Link, Link as RouterLink } from "react-router-dom";
import { ArrowForwardIos } from "@material-ui/icons";
import Data from "./BlogData";
import Content from "../../componentes/Contents";
function Blog() {
  return (
    <Box>
      <Box className="navbar-menu" />
      <Box className="img-banner">
        <Box>
          <img src={BannerBlog} alt="Banner Blog" className="banner" />
        </Box>
        <Box className="sobreposicao" />
        <Box className="text-img">
          <p>
            Fique por dentro das últimas novidades no mundo da tecnologia,
            marketing digital e outros através do nosso blog
          </p>
        </Box>
      </Box>
      <Box className="menu-materia">
        <Box className="box-icone">
          <Box>
            <p>Categorias</p>
          </Box>
          <Box>
            <ArrowForwardIos style={{ fontSize: 18 }} />
          </Box>
        </Box>
        <Box className="menu-materia-links">
          <nav>
            <ul>
              <Box>
                <Link to="#" className="link-materia">
                  Desenvolvimento de Software
                </Link>
              </Box>
              <Box>
                <Link to="#" className="link-materia">
                  Gestão de pessoas
                </Link>
              </Box>
              <Box>
                <Link to="#" className="link-materia">
                  Últimas tendências
                </Link>
              </Box>
            </ul>
          </nav>
        </Box>
      </Box>
      <Box className="materia">
        <Box>
          {Data.map((item) => (
            <Box key={item.id}>
              <ButtonBase
                component={RouterLink}
                to={"matter/" + item.id}
                className="container-buttonbase"
              >
                <Box className="container-materia">
                  <Box className="container-img-materia">
                    {/*eslint-disable-next-line jsx-a11y/alt-text*/}
                    <img src={item.image} className="image-matter" />
                  </Box>
                  <Box className="container-text-materia">
                    <Box>
                      <p className="title-materia">{item.title}</p>
                      <span className="box-span">
                        {item.autor} | {item.data}
                      </span>
                    </Box>
                    <Box className="text-materia">
                      <p>{item.text}</p>
                    </Box>
                  </Box>
                </Box>
              </ButtonBase>
            </Box>
          ))}
          <Box className="box-bottom">
            <button type="button" className="container-botao">
              Ver Mais
            </button>
          </Box>
        </Box>
        <Box className="box-content">
          <Content />
        </Box>
      </Box>
    </Box>
  );
}

export default Blog;
