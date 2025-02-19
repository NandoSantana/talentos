import React from "react";
import "../pages/Blog/index.css";
import { Box } from "@material-ui/core";

function Content() {
  return (
    <div>
      <Box className="container-conteudo">
        <div className="box-text">
          <p className="title-conteudo">Quer receber conteúdos exclusivos?</p>
          <p className="text-conteudo">É só se cadastrar!</p>
        </div>
        <div className="box-input">
          <input
            className="input-conteudo"
            type="email"
            label="E-mail"
            placeholder="E-mail*"
            required
          />
          <button type="buton" className="btn-conteudo">
            Cadastrar
          </button>
        </div>
      </Box>
    </div>
  );
}
export default Content;
