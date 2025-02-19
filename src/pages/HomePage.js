import React, { useState } from "react";
import { Box } from "@material-ui/core";
import BannerHome from "../componentes/Home/Banner";
// import StarHome from "../componentes/Home/Star";
import { ButtonBase } from "@material-ui/core";
// import Company from "../componentes/Home/Company";
// import Sparkle from "../componentes/Home/Sparkle";
// import Solutions from "../componentes/Home/Solutions";
import "./Style.css";
// import OurNumbers from "../componentes/Home/OurNumbers";
// import Partners from "../componentes/Home/Partners";
import DigitalAgency from "../componentes/Home/DigitalAgency";
// import ProgramTalent from "../componentes/Home/ProgramTalent";
import Introduction from "../componentes/Home/Introduction";
import IconsCircle from "../componentes/icons";
// import Arrows from "../componentes/Home/Arrows";
import Axios from "axios";
import swal from "sweetalert";

function HomePage() {
  document.title = "GIS";

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
    <Box>
      <BannerHome />
      {/* <IlustrationHome /> */}
      <Introduction />
      {/* <StarHome /> */}
      {/* <Company /> */}
      {/* <Solutions /> */}
      {/* <Sparkle /> */}
      {/* <OurNumbers /> */}
      {/* <ProgramTalent /> */}
      <DigitalAgency />
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
              className="input-newsletter"
            />
            <button type="submit" className="container-botao">
              Assinar
            </button>
          </form>
        </Box>
      </Box>
      {/* <Partners /> */}
      {/* <StarHome /> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 120,
          marginBottom: 80
        }}
      >
        <IconsCircle />
      </Box>
    </Box>
  );
}

export default HomePage;
