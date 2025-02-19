import React from "react";
import { Box } from "@material-ui/core";
import "./styleHome.css";
import concepcao from "../../assets/concepcao.png";
import Group1 from "../../assets/Group.svg";
import Group36 from "../../assets/Group 36.svg";
import Image17 from "../../assets/image 17.png";
import Image18 from "../../assets/image 18.png";
import Image19 from "../../assets/image 19.png";
import Image20 from "../../assets/image 20.png";
function Solutions() {
  return (
    <Box className="containerSolucao">
      <Box className="container-titulo">
        <Box>
          <p className="titulo">Soluções Tecnológicas</p>
        </Box>
      </Box>
      {/*Linha 1*/}
      <Box className="container-cards-solucoes">
        <Box className="cards-solucao">
          <Box className="caixaSolucao">
            <Box className="boxImgSolucao">
              <img src={concepcao} alt="concepção" className="imgSolucao" />
            </Box>

            <Box className="sub-titulo">
              <p>Desenvolvimento</p>
            </Box>
            <Box className="texto-paragrafo">
              Concepção da arquitetura e desenvolvimento de um site ou
              aplicativo.
            </Box>
          </Box>

          <Box className="caixaSolucao">
            <Box className="boxImgSolucao">
              <img src={Group1} alt="marketing" className="imgSolucao" />
            </Box>
            <Box className="sub-titulo">
              <p>Marketing & Conteúdo</p>
            </Box>
            <Box className="texto-paragrafo">
              Marketing de Conteúdo para redes sociais.
            </Box>
          </Box>
          <Box className="caixaSolucao">
            <Box className="boxImgSolucao">
              <img src={Group36} alt="e-commerce" className="imgSolucao" />
            </Box>
            <Box className="sub-titulo">
              <p>Soluções E-commerce</p>
            </Box>
            <Box className="texto-paragrafo">
              E-commerce consulte nossas soluções para gerenciar e expandir o
              seu negócio.
            </Box>
          </Box>
          <Box className="caixaSolucao">
            <Box className="boxImgSolucao">
              <img src={Image17} className="imgSolucao" alt="stacks" />
            </Box>
            <Box className="sub-titulo">
              <p>Stack-s</p>
            </Box>
            <Box className="texto-paragrafo">
              Stacks de desenvolvimento atuais que geram qualidade de produto.
            </Box>
          </Box>
        </Box>

        <Box className="cards-solucao">
          <Box className="caixaSolucao">
            <Box className="boxImgSolucao">
              <img src={Image18} alt="treinamento" className="imgSolucao" />
            </Box>
            <Box className="sub-titulo">
              <p>Treinamento de Gestão</p>
            </Box>
            <Box className="texto-paragrafo">
              Treinamento gestão, web, marketing e vendas!
            </Box>
          </Box>
          <Box className="caixaSolucao">
            <Box className="boxImgSolucao">
              <img src={Image19} alt="consultoria" className="imgSolucao" />
            </Box>
            <Box className="sub-titulo">
              <p>Consultoria</p>
            </Box>
            <Box className="texto-paragrafo">
              Consultoria e gestão da sua empresa para reduzir custos e otimizar
              resultados.
            </Box>
          </Box>
          <Box className="caixaSolucao">
            <Box className="boxImgSolucao">
              <img src={Image20} alt="branding" className="imgSolucao" />
            </Box>
            <Box className="sub-titulo">
              <p>Branding, UX e UI design</p>
            </Box>
            <Box className="texto-paragrafo">
              Branding, UX e UI design, projetos gráficos, design thinking e
              testes de usabilidade.
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Solutions;
