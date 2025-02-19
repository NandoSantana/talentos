import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import * as yup from "yup";
import { useFormik, Form } from "formik";
import BannerService from "../assets/dev_talento.png";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Icons from "../componentes/icons";
import "./Style.css";
import { IMaskInput } from "react-imask";
import Axios from "axios";
import swal from "sweetalert";

const validationSchema = yup.object().shape({
  nome: yup.string().required("O campo é obrigatório."),
  email: yup
    .string()
    .email("E-mail inválido.")
    .required("O campo é obrigatório."),
  telefone: yup.string().required("O campo é obrigatório."),
  empresa: yup.string().required("O campo é obrigatório."),
  office: yup.string().required("O campo é obrigatório."),
  area: yup.string().required("O campo é obrigatório."),
  subject: yup.string().required("O campo é obrigatório."),
  project: yup.string().required("O campo é obrigatório.")
});

const Service = () => {
  // var userData = new FormData(document.getElementById("service"));
  //Enviar os dados para o back-end
  const addService = async (e, file) => {
    let errorMessage = "Houve um erro ao enviar seu contato, tente novamente!";

    const url = "https://gestaointeligentesoftware.com.br/v1/api/empresa";
    // const url = "http://localhost:8000/api/empresa";

    const saveDataForm = true;

    if (saveDataForm) {
      // informando o tipo do grupo de contato ao backend
      // user.contact_group_id = 1;

      var userService = new FormData(document.getElementById("service"));
      var headers = { "Content-Type": "multipart/form-data" };
      // enviando dados do objeto user para a API
      Axios.post(url, userService, headers)
        .then((response) => {
          console.log(response);
          // JSON.stringify({
          //   type: "success",
          //   mensagem: sucessMessage
          // });

          swal({
            title: "Sucesso!",
            text: "Seu contato foi salvo em nossa área de empresas!",
            type: "success"
          }).then(function () {
            window.location = "/";
          });
        })
        .catch(function (error) {
          if (error.response) {
            JSON.stringify({
              type: "error",
              mensagem: errorMessage
            });
          }
        });
    } else {
      JSON.stringify({
        type: "error",
        mensagem: errorMessage
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      nome: "",
      email: "",
      telefone: "",
      empresa: "",
      office: "",
      area: "",
      subject: "",
      project: "",
      select: [],
      squad_desenvolvimento: false,
      transformacao_digital: false,
      squad_agil: false,
      desenvolvimento: false
    },

    validationSchema: validationSchema,
    onSubmit: (values, e) => {
      console.log(values);
      addService();
    }
  });

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
      <Box className="navbar-menu" />
      <Box>
        <img
          src={BannerService}
          alt="Banner pessoas trabalhando"
          className="banner-service"
        />
        <Box className="containerTexto">
          <Box className="containerTitulo tecnologia widthText">
            Você é empresa?
          </Box>

          <Box className="containerSubTitle subTitle">Conte com a GIS!</Box>
        </Box>
      </Box>

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
            <Typography variant="h3">Sou empresa</Typography>
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
              Sabemos que a contratação de profissionais de TI é um grande
              desafio.
            </Box>
            <Box style={style.text}>
              Para superar isso, ajudamos na contratação e na alocação de squads
              ou profissionais em seus projetos.
            </Box>
            <Box style={style.text}>Conte com a GIS!</Box>
          </Box>
        </Box>
      </Box>

      {/* Grid 
        TODO: Sombras dos cards
        */}

      <Box className="containerCardService">
        <Box className="cardService" style={{ backgroundColor: "#FFF" }}>
          <Box sx={style.cabecalhoCard}>Gis, com você!</Box>

          <Box className="textCard">
            Selecionamos os melhores profissionais ou squads para o nossos
            clientes.
          </Box>
        </Box>

        <Box
          className="cardService marginService"
          style={{ backgroundColor: "#FFF" }}
        >
          <Box sx={style.cabecalhoCard}>Gis Recrutamento!</Box>

          <Box className="textCard">
            <p>
              Recrutamos profissionais para os clientes. Contratamos o
              profissional para a empresa.
            </p>
          </Box>
        </Box>
      </Box>
      <Box className="container-title-service">
        <Box className="titleService">
          Para contratar ou tirar dúvidas, fale com a gente!
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 10
        }}
      >
        <Box style={{ color: "black", fontSize: "29px", textAlign: "center" }}>
          Preencha os campos abaixo!
        </Box>
      </Box>
      {/* <Container style={{width: "70%", height: 800, border: "1px solid  #333", marginBottom: 10}}> */}
      <form onSubmit={formik.handleSubmit} id="service">
        <div className="form-service">
          <section id="form01">
            <div className="container-form-service">
              <div className="container-input">
                <div className="box-form-input">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column"
                    }}
                  >
                    <div>
                      <label htmlFor="fname" className="title-form">
                        Nome*
                      </label>
                    </div>
                    <input
                      className="style-input fullWidth"
                      id="nome"
                      name="nome"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.nome}
                    />
                    {formik.touched.nome && formik.errors.nome ? (
                      <div style={{ color: "red", fontWeight: 600 }}>
                        {formik.errors.nome}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="box-form-input">
                <div className="checkbox">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column"
                    }}
                  >
                    <div style={{ marginTop: "10px" }}>
                      <label htmlFor="fname" className="title-form">
                        Tipo de serviço*
                      </label>
                    </div>
                    <div>
                      <div className="container-select">
                        <div className="select-form">
                          <FormControlLabel
                            control={
                              <Checkbox
                                style={{ color: "white" }}
                                label="aqui"
                                value="Squad de Desenvolvimento"
                              />
                            }
                            onChange={formik.handleChange}
                            value={formik.values.squad_desenvolvimento}
                            name="squad_desenvolvimento"
                            label="Squad de Desenvolvimento"
                            style={{
                              color: "white",
                              fontFamily: "Montserrat",
                              fontWeight: "500px",
                              marginTop: "20px"
                            }}
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                style={{ color: "white" }}
                                label="aqui"
                                value="Transformação Digital"
                              />
                            }
                            onChange={formik.handleChange}
                            value={formik.values.transformacao_digital}
                            name="transformacao_digital"
                            label="Transformação Digital"
                            style={{
                              color: "white",
                              fontFamily: "Montserrat",
                              fontWeight: "500px",
                              marginTop: "20px"
                            }}
                          />
                        </div>
                        <div className="select-form">
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={formik.handleChange}
                                style={{ color: "white" }}
                                label="aqui"
                                value="Squad Ágil"
                              />
                            }
                            onChange={formik.handleChange}
                            value={formik.values.squad_agil}
                            name="squad_agil"
                            label="Squad Ágil"
                            style={{
                              color: "white",
                              fontFamily: "Montserrat",
                              fontWeight: "500px",
                              marginTop: "20px"
                            }}
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                style={{ color: "white" }}
                                label="aqui"
                                value="Desenvolvimento"
                              />
                            }
                            onChange={formik.handleChange}
                            value={formik.values.desenvolvimento}
                            name="desenvolvimento"
                            label="Desenvolvimento"
                            style={{
                              color: "white",
                              fontFamily: "Montserrat",
                              fontWeight: "500px",
                              marginTop: "20px"
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-input">
                <div className="box-form-inputs">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column"
                    }}
                  >
                    <div>
                      <label htmlFor="fname" className="title-form">
                        E-mail*
                      </label>
                    </div>
                    <div>
                      <input
                        className="margin form-width style-input"
                        id="fname"
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div style={{ color: "red", fontWeight: 600 }}>
                          {formik.errors.email}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        flexDirection: "column"
                      }}
                    >
                      <div className="box-title-form">
                        <label htmlFor="fname" className="title-form">
                          Empresa*
                        </label>
                      </div>
                      <div>
                        <input
                          className="form-width style-input"
                          id="fname"
                          type="text"
                          name="empresa"
                          onChange={formik.handleChange}
                          value={formik.values.empresa}
                        />
                        {formik.touched.empresa && formik.errors.empresa ? (
                          <div style={{ color: "red", fontWeight: 600 }}>
                            {formik.errors.empresa}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-input">
                <div className="box-form-input">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column"
                    }}
                  >
                    <div>
                      <label htmlFor="fname" className="title-form">
                        Telefone*
                      </label>
                    </div>

                    <div
                      className="box-inputss"
                      style={{ display: "flex", flexdirection: "row" }}
                    >
                      <select
                        style={{
                          display: "flex",
                          height: 65,
                          width: 50,
                          cursor: "pointer"
                        }}
                        name="countries"
                      >
                        <option className="aoptions" value="+55">
                          &nbsp;&nbsp;&nbsp;🇧🇷
                        </option>
                        <option value="+1">&nbsp;&nbsp;🇱🇷</option>
                        <option value="+351">&nbsp;&nbsp;🇵🇹</option>
                      </select>
                      {/* <input className="inputs fullWidths" id="fname" type="fone" /> */}
                      <IMaskInput
                        mask="(00) 0 0000-0000"
                        className="style-input fullWidthFone"
                        name="telefone"
                        onChange={formik.handleChange}
                        value={formik.values.telefone}
                        type="fone"
                      />
                    </div>
                  </div>
                  {formik.touched.telefone && formik.errors.telefone ? (
                    <div style={{ color: "red", fontWeight: 600 }}>
                      {formik.errors.telefone}
                    </div>
                  ) : null}
                  {/* </div> */}
                  {/* </div> */}
                </div>
              </div>
              <div className="container-input">
                <div className="box-form-input">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column"
                    }}
                  >
                    <div>
                      <label htmlFor="fname" className="title-form">
                        Selecione qual o seu cargo*
                      </label>
                    </div>
                    <div className="select">
                      <select
                        className="style-input fullWidth"
                        id="fname"
                        type="text"
                        name="office"
                        onChange={formik.handleChange}
                        value={formik.values.office}
                      >
                        <option>Selecione</option>
                        <option value="Consultor(a)">Consultor(a)</option>
                        <option value="Diretor(a)">Diretor(a)</option>
                        <option value="Diretor(a)">Gerente</option>
                        <option value="Líder">Líder</option>
                        <option value="Coordenador(a)">Coordenador(a)</option>
                        <option value="Analista">Analista</option>
                        <option value="Engenheiro(a) de software">
                          Engenheiro(a) de software
                        </option>
                        <option value="Arquiteto(a) de software">
                          Arquiteto(a) de software
                        </option>
                        <option value="Estagiário(a)">Estagiário(a)</option>
                        <option value="Consultor(a)">Consultor(a)</option>
                        <option value="Estudante">Estudante</option>
                        <option value="Outros">Outros</option>
                      </select>
                      {formik.touched.office && formik.errors.office ? (
                        <div style={{ color: "red", fontWeight: 600 }}>
                          {formik.errors.office}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-input">
                <div className="box-form-input">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column"
                    }}
                  >
                    <div className="box-title-form">
                      <label htmlFor="fname" className="title-form">
                        Selecione a área em que você atua*
                      </label>
                    </div>

                    <select
                      className="style-input fullWidth"
                      id="fname"
                      type="text"
                      name="area"
                      onChange={formik.handleChange}
                      value={formik.values.area}
                    >
                      <option value="">Selecione</option>
                      <option value="Jurídico">Jurídico</option>
                      <option value="Financeiro">Financeiro</option>
                      <option value="Vendas">Vendas</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Administrativo">Administrativo</option>
                      <option value="Recursos Humanos">Recursos Humanos</option>
                      <option value="Tecnologia">Tecnologia</option>
                      <option value="Outros">Outros</option>
                    </select>
                    {formik.touched.area && formik.errors.area ? (
                      <div style={{ color: "red", fontWeight: 600 }}>
                        {formik.errors.area}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="container-input">
                <div className="box-form-input">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column"
                    }}
                  >
                    <div className="box-title-form">
                      <label htmlFor="fname" className="title-form">
                        Sobre qual assunto gostaria de falar*
                      </label>
                    </div>

                    <select
                      className="style-input fullWidth"
                      id="fname"
                      type="text"
                      name="subject"
                      onChange={formik.handleChange}
                      value={formik.values.subject}
                    >
                      <option>Selecione</option>
                      <option value="Talent Resourcing">GIS com você</option>
                      <option value="Talent Recruitment">
                        GIS Recrutamento
                      </option>
                      <option value="Outros">Outros</option>
                    </select>
                    {formik.touched.subject && formik.errors.subject ? (
                      <div style={{ color: "red", fontWeight: 600 }}>
                        {formik.errors.subject}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="container-input">
                <div className="box-form-input">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column"
                    }}
                  >
                    <div className="box-title-form">
                      <label htmlFor="fname" className="title-form">
                        Fale brevemente sobre o seu projeto *
                      </label>
                    </div>

                    <div className="select">
                      <textarea
                        className="height fullWidth"
                        id="fname"
                        type="text"
                        rows="1"
                        name="project"
                        onChange={formik.handleChange}
                        value={formik.values.project}
                      />
                      {formik.touched.project && formik.errors.project ? (
                        <div style={{ color: "red", fontWeight: 600 }}>
                          {formik.errors.project}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-submit">
                <button type="submit" onclick={onclick}>
                  Enviar
                </button>
              </div>
            </div>
          </section>
        </div>
      </form>
      {/* </Container> */}
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
              justifyContent: "center"
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
};

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
  }
};

export default Service;
