import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Vacancies from "./Vacancies";
import "./index.css";
import FormAcademic from "./FormAcademic";
import FormProfessional from "./FormProfessional";
import { FileText, Briefcase, Clipboard } from "react-feather";
import { School } from "@material-ui/icons";
import { IMaskInput } from "react-imask";
import { useParams } from "react-router-dom";
import Axios from "axios";
import swal from "@sweetalert/with-react";
import $ from "jquery";
import ButtonInputForm from "./../../componentes/button/buttonInput";
import CurrencyInput from "../../componentes/Currency";

function FormVacancies() {
  const params = useParams();
  console.log(params);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    activity: "",
    cpf: ""
  });
  //Receber os dados do formulário
  const valueInput = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  var item = Vacancies.find(function (element) {
    // eslint-disable-next-line eqeqeq
    return element.id == params.id;
  });
  var data = new Date().toISOString().split("T")[0];

  //Enviar os dados para o back-end
  const addVacancies = async (e) => {
    e.preventDefault();
    console.log("aqui");
    // if (!(await validate())) return;

    let sucessMessage = "Seu contato foi enviado com sucesso!";

    let errorMessage = "Houve um erro ao enviar seu contato, tente novamente!";

    const url = "https://gestaointeligentesoftware.com.br/v1/api/vagas";
    // const url = "http://localhost:8000/api/vagas";

    const saveDataForm = true;

    if (saveDataForm) {
      // informando o tipo do grupo de contato ao backend
      // user.contact_group_id = 2; // Sou Talento
      var userData = new FormData(document.getElementById("vacancies_id"));

      var academic_formacao = document.querySelectorAll(
        '[name="academic_formacao"]'
      );
      var academic_grau = document.querySelectorAll('[name="academic_grau"]');
      var academic_status = document.querySelectorAll(
        '[name="academic_status"]'
      );
      var academic_instituicao = document.querySelectorAll(
        '[name="academic_instituicao"]'
      );
      var academic_status = document.querySelectorAll(
        '[name="academic_status"]'
      );
      var academic_course = document.querySelectorAll(
        '[name="academic_course"]'
      );
      var academic_conclusao = document.querySelectorAll(
        '[name="academic_conclusao"]'
      );

      $(".academic").each(function (i) {
        var academic_tag = {
          academic_formacao: academic_formacao[i].value,
          academic_grau: academic_grau[i].value,
          academic_status: academic_status[i].value,
          academic_instituicao: academic_instituicao[i].value,
          academic_course: academic_course[i].value,
          academic_conclusao: academic_conclusao[i].value
        };

        userData.append("academic[]", JSON.stringify(academic_tag));
      });

      var cargo = document.querySelectorAll('[name="cargo"]');
      var empresa = document.querySelectorAll('[name="empresa"]');
      var emprego_inicio = document.querySelectorAll('[name="emprego_inicio"]');
      var emprego_fim = document.querySelectorAll('[name="emprego_fim"]');
      var emprego_atual = document.querySelectorAll('[name="emprego_atual"]');
      var descricao_atividades = document.querySelectorAll(
        '[name="descricao_atividades"]'
      );

      $(".professional").each(function (i) {
        var profissional_tag = {
          cargo: cargo[i].value,
          empresa: empresa[i].value,
          emprego_inicio: emprego_inicio[i].value,
          emprego_fim: emprego_fim[i].value,
          emprego_atual: emprego_atual[i].value,
          descricao_atividades: descricao_atividades[i].value
        };

        userData.append(
          "profissionalExperience[]",
          JSON.stringify(profissional_tag)
        );
      });
      userData.append("slug", item.title);
      userData.append("contact_group_id", 2);
      // contact_group_id = 2; // Sou Talento
      console.log(userData);

      // console.log(userData);
      var headers = { "Content-Type": "multipart/form-data" };
      // enviando dados do objeto user para a API
      Axios.post(url, userData, headers)
        .then((response) => {
          JSON.stringify({
            type: "success",
            mensagem: sucessMessage
          });
          swal(
            <div>
              <h1>Sucesso</h1>
              <p>Seu contato foi enviado com sucesso!</p>
              <p>Em breve entraremos em contato!</p>
              <p>Qualquer dúvida mande um e-mail para</p>
              <p>contato@gestaointeligentesoftware.com.br</p>
            </div>,
            {
              Icon: "sucess",
              type: "success"
            }
          ).then(function () {
            window.location = "https://talento.gestaointeligentesoftware.com/";
          });
        })
        .catch(function (error) {
          if (error.response) {
            JSON.stringify({
              type: "error",
              mensagem: errorMessage
            });
            swal("Oops!", errorMessage, "error");
          }
        });
    } else {
      JSON.stringify({
        type: "error",
        mensagem: errorMessage
      });
    }
  };

  return (
    <form onSubmit={addVacancies} id="vacancies_id">
      <Box className="navbar-background" />
      <div className="form-title">
        <h1>Faça parte do nosso time! </h1>
        <p>{item.title}</p>
      </div>
      <div className="progress">
        <div className="progress-icon">
          <FileText size={40} color="#FFF" />
        </div>
        <div className="progress-title">
          <p>Dados cadastrais</p>
        </div>
      </div>
      <div className="form-inputs">
        <div className="box-inputs">
          <div className="inputs">
            <div className="label">
              <label for="fname">Nome completo*</label>
            </div>
            <div>
              <input
                value={user.name}
                onChange={valueInput}
                name="name"
                className="input-form fullwidth"
                type="text"
                required
              />
            </div>
          </div>
        </div>
        <div className="box-inputs">
          <div className="inputs">
            <div className="label">
              <label for="fname">Endereço de e-mail*</label>
            </div>
            <div>
              <input
                className="input-form fullwidth"
                id="fname"
                name="email"
                type="email"
                value={user.email}
                onChange={valueInput}
                required
              ></input>
            </div>
          </div>
        </div>
        <div className="box-inputs">
          <div className="inputs">
            <div className="label">
              <label for="fname">Data de nascimento*</label>
            </div>
            <div>
              <input
                className="input-form width-form margin"
                id="fname"
                type="date"
                name="birthday"
                onChange={valueInput}
                max={data}
                required
              ></input>
            </div>
          </div>
          <div className="inputs">
            <div className="label">
              <label for="fname">Gênero*</label>
            </div>
            <div>
              <select
                onChange={valueInput}
                id="genre"
                name="genre"
                className="input-form width-form"
                required
              >
                <option>Feminino</option>
                <option>Masculino</option>
                <option>Outros</option>
              </select>
            </div>
          </div>
        </div>
        <div className="box-inputs">
          <div className="inputs">
            <div className="label">
              <label for="fname">Sua Nacionalidade*</label>
            </div>
            <div>
              <select
                className="input-form width-form margin"
                id="fname"
                type="text"
                onChange={valueInput}
                name="nacionality"
                required
              >
                <option>Selecione</option>
                <option>brasileira</option>
              </select>
            </div>
          </div>
          <div className="inputs">
            <div className="label">
              <label for="fname">Seu CPF*</label>
            </div>
            <div>
              {" "}
              <IMaskInput
                mask="000.000.000-00"
                className="input-form width-form"
                id="cpf"
                name="cpf"
                onChange={valueInput}
                type="text"
                required
              />
            </div>
          </div>
        </div>
        <div className="box-inputs">
          <div className="inputs">
            <div className="label">
              <label for="fname">Pessoa com deficiência?*</label>
            </div>
            <div>
              <select
                className="input-form width-form margin"
                onChange={valueInput}
                name="deficity"
                id="fname"
                type="text"
                required
              >
                <option>Selecione</option>
                <option>Sim</option>
                <option>Não</option>
              </select>
            </div>
          </div>
          <div className="inputs">
            <div className="label">
              <label for="fname">Número de telefone*</label>
            </div>
            <div>
              <IMaskInput
                mask="(00) 0 0000-0000"
                className="input-form width-form"
                type="fone"
                name="telefone"
                onChange={valueInput}
                required
              />
            </div>
          </div>
        </div>
        <ButtonInputForm />
      </div>
      <div className="bol-divider" />
      <div className="progress">
        <div className="progress-icon">
          <School style={{ fontSize: 40, color: "#FFF" }} />
        </div>
        <div className="progress-title">
          <p>Formação acadêmica*</p>
        </div>
      </div>

      <FormAcademic />

      <div className="bol-divider" />

      <div className="progress">
        <div className="progress-icon">
          <Briefcase size={40} color="#FFF" />
        </div>
        <div className="progress-title">
          <p>Experiência profissional*</p>
        </div>
      </div>
      <FormProfessional />
      <div className="bol-divider" />
      <div className="progress">
        <div className="progress-icon">
          <Clipboard size={40} color="#FFF" />
        </div>
        <div className="progress-title">
          <p>Outras informações</p>
        </div>
      </div>
      <div className="form-inputs">
        <div className="inputs">
          <div className="label">
            <label for="fname">Qual sua pretenção salarial?*</label>
          </div>
          <div>
            <CurrencyInput
              className="input-form fullwidth"
              id="fname"
              type="text"
              name="salary"
              onChange={valueInput}
              placeholder="R$"
              required
              maxLength={18}
            />
          </div>
        </div>
        <div className="box-inputs">
          <div className="inputs">
            <div className="label">
              <label for="fname">Link do seu linkedin*</label>
            </div>
            <div>
              <input
                className="input-form width-form margin"
                id="fname"
                type="text"
                name="linkedin"
                onChange={valueInput}
                placeholder="Linkedin"
                required
              />
            </div>
          </div>
          <div className="inputs">
            <div className="label">
              <label for="fname">Link do seu git*</label>
            </div>
            <div>
              <input
                className="input-form width-form"
                id="fname"
                type="text"
                name="git"
                onChange={valueInput}
                placeholder="link do seu git"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bol-divider" />
      <div className="button-salvar">
        <button type="submit">Salvar e continuar</button>
      </div>
    </form>
  );
}
export default FormVacancies;
