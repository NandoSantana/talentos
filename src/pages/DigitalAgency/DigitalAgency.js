import React, { useState } from "react";
import "./index.css";
import Banner from "../../assets/talent.png";
import { Box, Typography } from "@mui/material";
// import Information from "./Information";
import { ButtonBase } from "@material-ui/core";
// import Tools from "./Tools";
// import Icons from "../../componentes/icons";
import Works from "../../pages/Works/Works";
import Axios from "axios";
import swal from "sweetalert";

function AgencyDigital() {
  // const information = Information;
  // const tools = Tools;

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
    <>
      <div className="background-menu" />
      <div className="banner-agencyDigital">
        <img
          src={Banner}
          alt="banner agência de talentos"
          className="banner-img"
        />
        <p className="text-banner">Você é um profissional?</p>
      </div>
      {/* <div className="container-information">
        <p className="container-works">Como Trabalhamos</p>
        {information.map((item) => (
          <div className="information">
            <div className="icon-information">{item.icon}</div>
            <div className="text-information">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div> */}
      <div className="tools">
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/*O que fazemos*/}

          <Box>
            <Box
              style={{
                marginTop: "100px",
                fontFamily: "Montserrat",
                fontWeight: "700",
                fontSize: "36px",
                lineHeight: "43px",
                color: "#25CED1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center"
              }}
            >
              <Typography variant="h3">Gis, estou aqui!</Typography>
            </Box>

            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Box style={style.text}>
                Auxiliamos você a encontrar a melhor solução e facilitamos todas
                as etapas desse grande desafio!
              </Box>
              <Box style={style.text}>
                Criamos a solução mais rápida de contratação e alocação de
                squads ou profissionais.
              </Box>
              <Box style={style.text}>
                Com a gente fica fácil montar um time de acordo com as
                necessidades de seu projeto. Por isso, criamos a solução mais
                rápida de contratação e alocação de squads ou profissionais para
                as mais diversas propostas tecnológicas. Somos experts em
                contratar.
              </Box>
            </Box>
          </Box>
          <Box
            style={{
              marginTop: "100px",
              fontFamily: "Montserrat",
              fontWeight: "700",
              fontSize: "36px",
              lineHeight: "43px",
              color: "#25CED1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              marginBottom: "40px"
            }}
          >
            <Typography variant="h3">Confira nossas vagas!</Typography>
          </Box>
        </Box>
        <Works />
      </div>
      <Box sx={{ height: "100%" }}>
        <Box className="solutions">
          <Box className="title color-pink">
            <p>Assine nossa Newsletter</p>
          </Box>
          <Box className="box-input-newsletter">
            <form
              onSubmit={sendNewsletter}
              style={{
                flexDirection: "column",
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <input
                placeholder="E-mail"
                className="input-newsletter"
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
      </Box>
    </>
  );
}

const style = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "66px",
    flexWrap: "wrap",
    marginBottom: "30px"
  },
  title_form: {
    color: " #ffffff",
    fontWeight: 600,
    fontSize: "18px",
    marginLeft: "15px"
  },
  cabecalhoCard: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: "21px",
    textAlign: "center",
    marginTop: "30px",
    marginLeft: "18px"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "448px",
    height: "188px",
    marginTop: "10px",
    border: "14px solid #25ced1",
    borderRadius: "10px"
  },
  textoCard: {
    marginTop: "25px",
    textAlign: "left",

    // marginLeft: "18px",
    fontSize: "18px",
    width: "320px"
  },
  containerText: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "10px"
  },
  text: {
    // flexWrap: "wrap",
    marginTop: "66px",
    textAlign: "center",
    fontSize: "21px",
    fontfamily: "Montserrat",
    fontWeight: 500,
    alignItems: "center",
    justifyContent: "center",

    width: "70%"
  },
  textBanner: {},
  "@media screen and (max-width: 375px)": {
    textBanner: {
      fontSize: 30
    }
  }
};
export default AgencyDigital;
