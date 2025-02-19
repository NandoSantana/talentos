import React from "react";
import { Box, ButtonBase, Portal } from "@material-ui/core";
import { PlusSquare, MinusSquare } from "react-feather";

function FormAcademic() {
  const [show, setShow] = React.useState(false);
  const container = React.useRef(null);
  const [value, setValue] = React.useState({
    academic_formacao: "",
    academic_grau: "",
    academic_status: "",
    academic_instituicao: "",
    academic_course: "",
    academic_conclusao: ""
  });

  const valueInput = (e) =>
    setValue({ ...value, [e.target.name]: e.target.value });

  const handleClick = () => {
    setShow(!show);
  };
  var data = new Date().toISOString().split("T")[0];

  return (
    <>
      <form className="form-inputs academic">
        <div className="box-inputs">
          <Box className="inputs">
            <Box className="label">
              <label for="formacao">Formação*</label>
            </Box>
            <Box>
              <select
                className="input-form width-form input-academic margin"
                id="formacao"
                name="academic_formacao"
                onChange={valueInput}
                value={value.academic_formacao}
                type="text"
                required
              >
                <option>selecione</option>
                <option>Fundamental</option>
                <option>Médio</option>
                <option>Técnico</option>
                <option>Superior</option>
              </select>
            </Box>
          </Box>
          <Box className="inputs">
            <Box className="label">
              <label for="grau">Grau*</label>
            </Box>
            <Box>
              <select
                className="input-form width-form input-academic"
                id="grau"
                name="academic_grau"
                onChange={valueInput}
                value={value.academic_grau}
                type="text"
                required
              >
                <option>selecione</option>
                <option>Tecnólogo</option>
                <option>Graduação</option>
                <option>Pós-graduação</option>
                <option>Mestrado</option>
                <option>Doutorado</option>
              </select>
            </Box>
          </Box>
        </div>

        <div className="box-inputs">
          <Box className="inputs">
            <Box className="label">
              <label for="status">Status*</label>
            </Box>
            <Box>
              <select
                className="input-form width-form  input-academic margin"
                id="status"
                name="academic_status"
                onChange={valueInput}
                value={value.academic_status}
                type="text"
                required
              >
                <option>selecione</option>
                <option>Em andamento</option>
                <option>Incompleto</option>
                <option>Completo</option>
              </select>
            </Box>
          </Box>
          <Box className="inputs">
            <Box className="label">
              <label for="instituicao">Instituição*</label>
            </Box>
            <Box>
              <input
                className="input-form width-form"
                id="instituicao"
                name="academic_instituicao"
                onChange={valueInput}
                value={value.academic_instituicao}
                type="text"
                required
              />
            </Box>
          </Box>
        </div>
        <div className="box-inputs">
          <Box className="inputs">
            <Box className="label">
              <label for="curso">Curso*</label>
            </Box>
            <Box>
              <input
                className="input-form width-form margin"
                id="curso"
                name="academic_course"
                onChange={valueInput}
                value={value.academic_course}
                type="text"
                required
              />
            </Box>
          </Box>
          <Box className="inputs">
            <Box className="label">
              <label for="conclusao">Ano de conclusão*</label>
            </Box>
            <Box>
              <input
                className="input-form width-form"
                id="conclusao"
                name="academic_conclusao"
                max={data}
                onChange={valueInput}
                value={value.academic_conclusao}
                type="date"
                required
              />
            </Box>
          </Box>
        </div>
        <div className="button-form">
          <div>
            <ButtonBase type="button" onClick={handleClick}>
              {show ? (
                <div className="button-remover">
                  <MinusSquare />
                  <p>Remover formação</p>
                </div>
              ) : (
                <div className="button-remover">
                  <PlusSquare />
                  <p>Adicionar nova formação</p>
                </div>
              )}
            </ButtonBase>
          </div>
        </div>
      </form>
      <div>
        {show ? (
          <Portal container={container.current}>
            <FormAcademic />
          </Portal>
        ) : null}
      </div>
      <div ref={container} />
    </>
  );
}

export default FormAcademic;
