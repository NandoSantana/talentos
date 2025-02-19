import React, { useState } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Carousel from "../../componentes/Carousel/carousel";
import "./Index.css";
import Icons from "../../componentes/icons";
import * as yup from "yup";
import InputButton from "../../componentes/button/buttonInput";
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";

const PinkCheckbox = withStyles({
  root: {
    color: "#FE2B75",
    "&$checked": {
      color: "#FE2B75"
    }
  },
  checked: {}
})((props) => <Checkbox color="default" {...props} />);

function TextMaskCustom(props) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#0) 0 0000-0000"
      definitions={{
        "#": /[1-9]/
      }}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
}

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

function Contact() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false
  });
  const handleChecked = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [user, setUser] = useState({
    name: "",
    email: "",
    fone: ""
  });

  const [status, setStatus] = useState({
    type: "",
    mensagem: ""
  });

  //Receber os dados do formulário
  const valueInput = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  //Enviar os dados para o back-end
  const addUser = async (e) => {
    e.preventDefault();

    if (!(await validate())) return;

    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: "success",
        mensagem: "Usuário cadastrado com sucesso!"
      });
      setUser({
        name: "",
        email: "",
        fone: ""
      });
    } else {
      setStatus({
        type: "error",
        mensagem: "Erro: Usuário não cadastrado com sucesso!"
      });
    }
  };

  async function validate() {
    let schema = yup.object().shape({
      fone: yup
        .string("Erro: Necessário preencher o campo senha!")
        .required("Erro: Necessário preencher o campo senha!")
        .min(6, "Erro: A senha deve ter no mínimo 6 caracteres!"),
      email: yup
        .string("Erro: Necessário preencher o campo e-mail!")
        .required("Erro: Necessário preencher o campo e-mail!")
        .email("Erro: Necessário preencher o campo com e-mail válido!"),
      name: yup
        .string("Erro: Necessário preencher o campo nome!")
        .required("Erro: Necessário preencher o campo nome!")
    });

    try {
      await schema.validate(user);
      return true;
    } catch (err) {
      setStatus({
        type: "error",
        mensagem: err.errors
      });
      return false;
    }
  }

  return (
    <div>
      <Box className="navbar-container" />
      <Box className="contacts">
        <Box className="title-contact">Contato</Box>
        <form className="form" onSubmit={addUser}>
          <Box className="container-form">
            <Typography variant="h6">
              Entre em contato e conte um pouco mais sobre seu projeto ou sua
              ideia.
            </Typography>

            <Box className="box-one">
              <p>1-Fale sobre sua empresa</p>
              <TextField
                type="text"
                variant="outlined"
                placeholder=" Nome"
                fullWidth
                className="input"
                value={user.name}
                name="name"
                label="Nome"
                onChange={valueInput}
              />

              <Box sx={{ display: "flex", marginTop: 3 }}>
                <Box sx={{ width: 420 }}>
                  <TextField
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={valueInput}
                    value={user.email}
                    fullWidth
                  />
                </Box>
                <Box sx={{ marginLeft: 2, width: 420 }}>
                  <TextField
                    type="tel"
                    variant="outlined"
                    placeholder="Telefone"
                    label="Telefone"
                    name="fone"
                    onChange={valueInput}
                    value={user.fone}
                    fullWidth
                    inputComponent={TextMaskCustom}
                    InputProps={{
                      inputComponent: TextMaskCustom
                    }}
                  />
                </Box>
              </Box>
              <Box sx={{ marginTop: 2 }}>
                <TextField
                  type="text"
                  variant="outlined"
                  placeholder="Site"
                  fullWidth
                  label="Site"
                  onChange={valueInput}
                />
              </Box>
              <Box sx={{ marginTop: 2 }}>
                <TextField
                  type="text"
                  variant="outlined"
                  placeholder="Qual o seu faturamento médio mensal?"
                  onChange={valueInput}
                  fullWidth
                  select
                  SelectProps={{ native: true }}
                  inputProps={{
                    shrink: true
                  }}
                  label="Qual o seu faturamento médio mensal?"
                >
                  <option> </option>
                  <option>De 0 à 5 mil</option>
                  <option>De 5 à 20 mil</option>
                  <option>De 21 à 50 mil</option>
                  <option>De 51 à 70 mil</option>
                  <option>De 71 à 100 mil</option>
                  <option>De 101 à 400 mil</option>
                  <option>De 401 à 1 millhão</option>
                  <option>Mais de 1 Milhão</option>
                  <option>Outros</option>
                </TextField>
              </Box>
            </Box>

            <Box className="box-one">
              <p>2 - Conte sobre o seu projeto ou ideia.</p>
              <TextField
                type="text"
                variant="outlined"
                fullWidth
                placeholder="Descreva seu projeto ou ideia."
                label="Descreva seu projeto ou ideia."
                onChange={valueInput}
                multiline
                rows={5}
              />
              <TextField
                type="text"
                variant="outlined"
                fullWidth
                placeholder="Qual seu ramo?"
                style={{ marginTop: 12 }}
                label="Qual seu ramo?"
                onChange={valueInput}
              />
              <Box className="box-inputs">
                <InputButton />
              </Box>
            </Box>

            <Box className="box-one">
              <p>3 - Serviços interessados</p>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <FormControlLabel
                control={
                  <PinkCheckbox
                    checked={state.checkedA}
                    onChange={handleChecked}
                    name="checkedA"
                  />
                }
                label="Desenvolvimento web ou apps"
              />
              <FormControlLabel
                control={
                  <PinkCheckbox
                    checked={state.checkedB}
                    onChange={handleChecked}
                    name="checkedB"
                  />
                }
                label="Contratar desenvolvedores"
              />
              <FormControlLabel
                control={
                  <PinkCheckbox
                    checked={state.checkedC}
                    onChange={handleChecked}
                    name="checkedC"
                  />
                }
                label="Serviços de AI"
              />
              <FormControlLabel
                control={
                  <PinkCheckbox
                    checked={state.checkedD}
                    onChange={handleChecked}
                    name="checkedD"
                  />
                }
                label="Software personalizado"
              />
              <FormControlLabel
                control={
                  <PinkCheckbox
                    checked={state.checkedE}
                    onChange={handleChecked}
                    name="checkedE"
                  />
                }
                label="Teste de Software e controle de qualidade"
              />
              <FormControlLabel
                control={
                  <PinkCheckbox
                    checked={state.checkedF}
                    onChange={handleChecked}
                    name="checkedF"
                  />
                }
                label="Integração de API "
              />
            </Box>

            <Box className="box-one">
              <p>4 - Agende uma avaliação gratuita!</p>
            </Box>
            <Carousel />
            <div className="mensage-error">
              {status.type === "success" ? (
                <p style={{ color: "green" }}>{status.mensagem}</p>
              ) : (
                ""
              )}
              {status.type === "error" ? (
                <p style={{ color: "#ff0000" }}>{status.mensagem}</p>
              ) : (
                ""
              )}
            </div>
            <Box
              sx={{
                marginLeft: 20,
                marginBottom: 4,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Box sx={{ marginRight: 20 }}>
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#FE2B75",
                    color: "#FFF",
                    fontSize: 16,
                    padding: 15
                  }}
                >
                  Enviar
                </Button>
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Icons />
      </Box>
    </div>
  );
}

export default Contact;
