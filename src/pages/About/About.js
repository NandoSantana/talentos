import React, { useState } from "react";
import { Box, ButtonBase } from "@material-ui/core";
import BannerAbout from "../../componentes/Home/BannerAbout";
import Axios from "axios";
import swal from "sweetalert";
// import Agilidade from "../../assets/Agilidade.png";
// import Especificacao from "../../assets/Especificacao.png";
// import Tecnologia from "../../assets/tecnoligia.png";
// import Inovacao from "../../assets/Inovacao.png";
// import CardImg from "../../assets/CardImg.png";
// import CardImg2 from "../../assets/CardImg2.png";
// import CardImg3 from "../../assets/CardImg3.png";
import "./index.css";
import Icons from "../../componentes/icons";
function About() {
  const [email, setMail] = useState({
    email: ""
  });

  // Validar o email inputado
  const valueInput = (e) =>
    setMail({ ...email, [e.target.name]: e.target.value });

  // Enviar os dados para o back-end
  const sendNewsletter = async (e) => {
    e.preventDefault();

    const url = "https://gestaointeligentesoftware.com.br/v1/api/newsletter";
    const saveDataForm = true;

    if (saveDataForm) {
      Axios.post(url, email).then((response) => {
        swal({
          title: "Sucesso!",
          text: "Email adicionado ao newsletter!",
          type: "success"
        });
      });
    }
  };

  return (
    <Box className="about">
      {/* <Box className="container-navbar" /> */}
      {/* <Container> */}
      <BannerAbout />
      <Box className="text-about">
        <Box className="title color-blue">
          <p>Sobre Nós</p>
        </Box>
        <Box className="text">
          <Box
            style={{ textAlign: "center", display: "flex" }}
            className="container-text"
          >
            A coragem é a palavra do início de nossa história.
          </Box>

          <Box className="textLeft">
            <Box className="container-text">
              A GIS começou a partir de uma curiosidade na área de tecnologia.
              Em conversa com um técnico de informática que estava consertando
              seu primeiro notebook, uma estudante de TI ficou curiosa e mais
              apaixonada pelo universo da computação. Com seu primeiro notebook,
              começou sua aventura pela área de desenvolvimento, o que
              possibilitou o surgimento da GIS.
            </Box>
          </Box>

          <Box className="textRight">
            <Box className="container-text">
              Somos a visão de nossos clientes. Para entregar a solução
              necessária, utilizamos a tecnologia para agregar valor aos
              negócios. Além disso, prezamos pela humanização dos processos, dos
              serviços e dos relacionamentos. Construímos experiências. Mesmo em
              cenários complexos, buscamos sempre que possível, soluções simples
              e modernas para facilitar o dia a dia das pessoas. Nosso time tem
              ampla experiência e sempre se especializa para ajudar os negócios
              de nossos clientes.
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="solutions">
        <Box className="title color-pink">
          <p>Assine nossa Newsletter</p>
        </Box>
        <Box className="container-newsletter">
          <form
            onSubmit={sendNewsletter}
            style={{
              flexDirection: "column",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%"
            }}
          >
            <input
              placeholder="E-mail"
              name="email"
              type="email"
              label="E-mail"
              onChange={valueInput}
            />
            <br />

            <button className="container-botao" type="submit">
              Assinar
            </button>
          </form>
        </Box>
      </Box>
      {/* <Box>
        <Box className="title color-blue">
          <p>Como atuamos</p>
        </Box>
        <Box className="cards-icon">
          <Box className="container-card">
            <Box className="box-cards">
              <Box className="card-icons">
                <img
                  src={Agilidade}
                  alt="ícone de um crônometro"
                  className="icons"
                />

                <p className="text subtitle">Agilidade</p>
              </Box>
              <Box className="card-icons">
                <img src={Especificacao} alt="ícone " className="icons" />

                <p className="text subtitle">Especificação</p>
              </Box>{" "}
            </Box>
            <Box className="box-cards">
              <Box className="card-icons">
                <img src={Tecnologia} alt="ícone" className="icons" />

                <p className="text subtitle">Tecnologia</p>
              </Box>
              <Box className="card-icons">
                <img src={Inovacao} alt="ícone" className="icons" />

                <p className="text subtitle">Inovação</p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box> */}
      {/* <Box className="container-blog">
        <Box className="title color-pink">
          <p>Dá um Olhada em nosso blog</p>
        </Box>
        <Box className="container-card-blog">
          <Box className="card-blog-img margin-blog">
            <img
              src={CardImg}
              alt="imagem de pessoas trabalhando ao redor de uma mesa"
              className="imagem-card"
            />
            <p className="title-blog">Titulo da materia</p>
            <p className="text-blog">
              Textotexto Texto texto Texto texto Texto texto Textotexto Texto
              textoText otextoTextotexton
            </p>
          </Box>
          <Box className="card-blog-img margin-blog">
            <img
              src={CardImg2}
              alt="imagem de pessoas trabalhando ao redor de uma mesa"
              className="imagem-card"
            />
            <p className="title-blog">Titulo da materia</p>
            <p className="text-blog">
              Textotexto Texto texto Texto texto Texto texto Textotexto Texto
              textoText otextoTextotexton
            </p>
          </Box>
          <Box className="card-blog-img">
            <img
              src={CardImg3}
              alt="imagem de pessoas trabalhando ao redor de uma mesa"
              className="imagem-card"
            />
            <p className="title-blog">Titulo da materia</p>
            <p className="text-blog">
              Textotexto Texto texto Texto texto Texto texto Textotexto Texto
              textoText otextoTextotexton
            </p>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <ButtonBase href="/querocontratar">
            <Box className="container-botao">
              <p>Veja mais</p>
            </Box>
          </ButtonBase>
        </Box>
      </Box> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 10
        }}
      >
        <Icons />
      </Box>
    </Box>
  );
}

export default About;
