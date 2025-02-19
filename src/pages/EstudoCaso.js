import * as React from "react";
import Box from "@mui/material/Box";

import Container from "@mui/material/Container";
import LogoDiefra from "./../assets/imagens/logo_diefra.png";
import NotebookDiefra from "./../assets/imagens/notebook_diefra.png";
import LogoDemarco from "./../assets/imagens/logo_demarco.png";
import NotebookDemarco from "./../assets/imagens/notebook_demarco.png";
import LogoReally from "./../assets/imagens/logo_really.png";
import NotebookSiteReally from "./../assets/imagens/notebook_site_really.png";

function SobreNos() {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#FE2B75",
          width: "100%",
          height: 70,
          position: "fixed",
          top: 0
        }}
      ></Box>
      <Container>
        <Box style={{ display: "flex", flexDirection: "column" }}>
          {/*O que fazemos*/}
          <Box
            sx={{
              borderRadius: "15px",
              marginTop: "84px",
              borderColor: "#FE2B75",
              fontWeigth: "bold",
              fontSize: 48,
              color: "#FE2B75",
              textAlign: "center"
            }}
          >
            Estudo de casos
          </Box>
        </Box>

        <Box sx={{ marginTop: "94px", fontFamily: "Montserrat, sans-serif" }}>
          Como nós ajudamos empresas a transformar seu negócio.
        </Box>
      </Container>

      {/* Cards */}
      {/*TODO: Usar flex-start na primeira col. de cada card */}
      <Container sx={{ marginTop: "161px", marginBottom: "142px" }}>
        <Container sx={{ display: "flex", backgroundColor: "#D5FCF9" }}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",

              justifyContent: "space-around"
            }}
          >
            <Box>
              <img src={LogoDiefra} alt="Logo Diefra"></img>
            </Box>

            <Box sx={style.cabecalho}>Ferramenta de Gestão de Obras</Box>

            <Box sx={style.conteudo}>
              Explicar o objetivo do web site, melhorando o texto e falando as
              possibilidades
            </Box>
          </Container>

          <Container sx={{ display: "flex", flexDirection: "column-reverse" }}>
            <Box
              sx={{ marginTop: "94px", fontFamily: "Montserrat, sans-serif" }}
            >
              {/* Largura de imagens de notebooks foram red. para dar mais espaço para os textos */}
              <img src={NotebookDiefra} alt="Logo Diefra" width="500px"></img>
            </Box>
          </Container>
        </Container>

        <Container
          sx={{
            display: "flex",
            backgroundColor: "#D0F2B6",
            marginTop: "70px",
            marginBottom: "70px"
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",

              justifyContent: "space-around"
            }}
          >
            <Box>
              <img src={LogoDemarco} alt="Logo Demarco"></img>
            </Box>

            <Box sx={style.cabecalho}>
              Ferramenta de Gestão e Controle de Auditorias e Avaliações
            </Box>

            <Box sx={style.conteudo}>
              Explicar o objetivo do web site, melhorando o texto e falando as
              possibilidades
            </Box>
          </Container>

          <Container sx={{ display: "flex", flexDirection: "column-reverse" }}>
            <Box
              sx={{ marginTop: "94px", fontFamily: "Montserrat, sans-serif" }}
            >
              <img
                src={NotebookDemarco}
                alt="Notebook Demarco"
                width="500px"
              ></img>
            </Box>
          </Container>
        </Container>

        <Container sx={{ display: "flex", backgroundColor: "#DBE5F8" }}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",

              justifyContent: "space-around"
            }}
          >
            <Box>
              <img src={LogoReally} alt="Logo Really"></img>
            </Box>

            <Box sx={style.cabecalho}>ERP</Box>

            <Box sx={style.conteudo}>
              Explicar o objetivo do web site, melhorando o texto e falando as
              possibilidades
            </Box>
          </Container>

          <Container sx={{ display: "flex", flexDirection: "column-reverse" }}>
            <Box
              sx={{ marginTop: "94px", fontFamily: "Montserrat, sans-serif" }}
            >
              <img
                src={NotebookSiteReally}
                alt="Notebook mostrando site Really"
                width="598px"
              ></img>
            </Box>
          </Container>
        </Container>
      </Container>
    </div>
  );
}

const style = {
  cabecalho: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: "36px"
  },
  conteudo: {
    fontFamily: "Montserrat",
    fontWeight: "500",
    fontSize: "24px"
  }
};

export default SobreNos;
