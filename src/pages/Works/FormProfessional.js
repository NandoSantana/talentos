import React from "react";
import { Portal, ButtonBase } from "@material-ui/core";
import { PlusSquare, MinusSquare } from "react-feather";
import "./index.css";

function FormProfessional() {
  const [checked, setChecked] = React.useState(false);

  const [value, setValue] = React.useState({
    cargo: "",
    empresa: "",
    emprego_inicio: "",
    emprego_fim: "",
    emprego_atual: "",
    descricao_atividades: ""
  });
  const [open, setOpen] = React.useState(false);
  const container = React.useRef(null);
  const valueInput = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    // setChecked(checked)
  };
  const handleChange = () => {
    setChecked(!checked);
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  var data = new Date().toISOString().split("T")[0];

  return (
    <>
      <form className="form-inputs professional">
        <div className="box-inputs">
          <div className="inputs">
            <div className="label">
              <label for="empresa">Empresa*</label>
            </div>
            <div>
              <input
                className="input-form width-form margin"
                value={value.empresa}
                onChange={valueInput}
                name="empresa"
                id="empresa"
                type="text"
                required
              />
            </div>
          </div>
          <div className="inputs">
            <div className="label">
              <label for="cargo">Cargo*</label>
            </div>
            <div>
              <input
                className="input-form width-form"
                name="cargo"
                value={value.cargo}
                onChange={valueInput}
                id="cargo"
                type="text"
                required
              />
            </div>
          </div>
        </div>
        <div className="box-inputs">
          <div className="inputs">
            <div className="label">
              <label for="inicio">Periodo do emprego(Início)*</label>
            </div>
            <div>
              <input
                className="input-form width-form margin"
                id="inicio"
                name="emprego_inicio"
                type="date"
                onChange={valueInput}
                value={value.emprego_inicio}
                placeholder="Início"
                max={data}
                required
              />
            </div>
          </div>
          <div className="inputs">
            <div className="label">
              <label for="fim">Periodo do emprego(Fim)*</label>
            </div>
            <div>
              <input
                max={data}
                className="input-form width-form"
                id="fim"
                name="emprego_fim"
                type="date"
                onChange={valueInput}
                value={value.emprego_fim}
                placeholder="Fim"
                required
              />
            </div>
          </div>
        </div>
        <div className="input-checkbox">
          <div>
            <input
              type="checkbox"
              onChange={handleChange}
              value={checked}
              name="emprego_atual"
              required
            />
            <label for="checked">Meu emprego atual</label>
          </div>
        </div>

        <div className="box-inputs">
          <div className="inputs">
            <div>
              <label>Descreva suas atividades*</label>
            </div>
            <div>
              <textarea
                rows="4"
                cols="33"
                name="descricao_atividades"
                onChange={valueInput}
                value={value.descricao_atividades}
                className="input-form fullwidth"
                required
              ></textarea>
            </div>
          </div>
        </div>

        <div className="button-form">
          <div>
            <ButtonBase
              type="button"
              onClick={handleOpen}
              className="buttonBase"
            >
              {open ? (
                <div className="button-remover">
                  <MinusSquare />
                  <p>Remover experiência</p>
                </div>
              ) : (
                <div className="button-add">
                  <PlusSquare />
                  <p>Adicionar nova experiência</p>
                </div>
              )}
            </ButtonBase>
          </div>
        </div>
      </form>
      <div>
        {open ? (
          <Portal container={container.current}>
            <FormProfessional />
          </Portal>
        ) : null}
      </div>
      <div ref={container} />
    </>
  );
}
export default FormProfessional;
