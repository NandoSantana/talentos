import * as React from "react";
import { Box, ButtonBase } from "@mui/material";
import "./FooterStyle.css";
import Logo from "../../assets/logo_branco_.png";
import Whatsapp from "../../assets/whatsapp.png";
import { Instagram, Facebook, Twitter } from "@material-ui/icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box className="footer">
      <Box className="box-logo">
        <Box>
          <img
            src={Logo}
            className="logo-footer"
            alt="logo Gestão Inteligente de Software"
          />
        </Box>
        <Box className="link-footer link-text">
          <Box className="Title-link">
            <span>Links</span>
          </Box>
          <Box>
            <Link to="about" className="links">
              Sobre nós
            </Link>
          </Box>
          <Box>
            <Link to="service" className="links">
              Sou empresa
            </Link>
          </Box>

          <Box>
            <Link to="agencyDigital" className="links">
              Sou talento
            </Link>
          </Box>
        </Box>
        <Box className="link-footer">
          <Box className="Title-link">
            <span>Endereço</span>
          </Box>
          <Box className="links">
            <span>Avenida Euclides da Cunha, Nº 850 | Santa Luzia - MG</span>
          </Box>
          <Box className="Title-link">
            <span>Telefones</span>
          </Box>
          <Box className="links link-fone">
            <a
              href="https://api.whatsapp.com/send?phone=5531971694694"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon-whatsapp"
                src={Whatsapp}
                alt="icone whatsapp"
                width={15}
                height={15}
              />

              <span>(31) 9 7169-4694</span>
            </a>
          </Box>
          <Box className="links link-fone">
            <a
              href="https://api.whatsapp.com/send?phone=5531985217476"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon-whatsapp"
                src={Whatsapp}
                alt="icone whatsapp"
                width={15}
                height={15}
              />

              <span>(31) 9 8521-7476</span>
            </a>
          </Box>

          <Box className="Title-link">
            <span>Email</span>
          </Box>
          <Box className="links">
            <span>contato@gestaointeligentesoftware.com.br</span>
          </Box>
        </Box>
        <Box className=" icone-instagram">
          <Box>
            <ButtonBase>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/gestaointeligentesoftware/"
                className="link-icones"
              >
                <Instagram className="icone-insta" />
              </a>
            </ButtonBase>
          </Box>
          <Box>
            <ButtonBase>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/GiGicomercial"
                className="link-icones"
              >
                <Facebook className="icone-insta" />
              </a>
            </ButtonBase>
          </Box>

          <Box>
            <ButtonBase>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/gestao_software"
                className="link-icones"
              >
                <Twitter className="icone-insta" />
              </a>
            </ButtonBase>
          </Box>
        </Box>
      </Box>
      <Box className="direitos">
        <span>
          Copyright &copy; 2022 Gestão Inteligente | Todos os direitos
          reservados
        </span>
      </Box>
    </Box>
  );
}

export default Footer;
