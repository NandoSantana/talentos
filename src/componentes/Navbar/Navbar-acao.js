import React from "react";
import { Box, Drawer, IconButton, ButtonBase } from "@material-ui/core";
import "./Navbar-acao.css";
import { Link } from "react-router-dom";
import LogoBranco from "../../assets/logo_branco_.png";
import Whatsapp from "../../assets/whatsapp.png";
import { Menu, ArrowBack } from "@material-ui/icons";

function NavBarAcao({ acao }) {
  const [state, setState] = React.useState({
    left: false
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box className="menu-lateral">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Box>
          <ButtonBase
            onClick={toggleDrawer(anchor, false)}
            onClose={toggleDrawer(anchor, false)}
          >
            <ArrowBack style={{ color: "#fff" }} />
          </ButtonBase>
        </Box>
        <Box sx={{ marginTop: 10, marginRight: 10 }}>
          <a
            href="https://api.whatsapp.com/send?phone=5531985217476"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Whatsapp} alt="logo Gis" width={37} height={37} />
          </a>
        </Box>
      </Box>
      <nav>
        <Box sx={{ marginTop: 30 }}>
          <Box className="box-lateral">
            <Link to="/" className="link-lateral">
              Início
            </Link>
          </Box>
          <Box className="box-lateral">
            <Link to="about" className="link-lateral">
              Sobre nós
            </Link>
          </Box>
          <Box className="box-lateral">
            <Link to="service" className="link-lateral">
              Sou empresa
            </Link>
          </Box>

          <Box className="box-lateral">
            <Link to="agencyDigital" className="link-lateral">
              Sou talento
            </Link>
          </Box>
        </Box>
      </nav>
    </Box>
  );
  return (
    <Box className="menu">
      <Box className={acao ? "ativaCor container" : "container"}>
        <Box className="container-menu">
          <Box>
            {/* Box logo */}
            <Link to="/">
              <img src={LogoBranco} alt="Logo Gis Branco" className="logo" />
            </Link>
          </Box>
          <Box sx={{ marginRight: 30 }}>
            <nav>
              <Link to="/" className="nav-link">
                Início
              </Link>
              <Link to="about" className="nav-link">
                Sobre Nós
              </Link>

              <Link to="service" className="nav-link submenu">
                Sou empresa
                {/* <nav>
                  <Link to="agencyDigital" className="nav-link">
                    Agência Digital
                  </Link>
                  <Link to="#" className="nav-link">
                    Talent program
                  </Link>
                </nav> */}
              </Link>
              <Link to="agencyDigital" className="nav-link">
                Sou talento
              </Link>
              {/* blog */}
              {/* <Link to="contact" className="nav-link">
                Contatos
              </Link>
              <Link to="works" className="nav-link">
                Quero ser Gis
              </Link> */}
            </nav>
          </Box>

          <Box>
            <a
              href="https://api.whatsapp.com/send?phone=5531985217476"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Whatsapp}
                alt="Logo Gis Branco"
                width="40px"
                height="40px"
              />
            </a>
          </Box>
        </Box>
        <Box className="drawer">
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Box className="box-menu">
                <Box sx={{ marginLeft: 10, marginRight: 10 }}>
                  <img src={LogoBranco} alt="logo" width={47} height={47} />
                </Box>
                <Box>
                  <IconButton
                    color="inherit"
                    onClick={toggleDrawer(anchor, true, true)}
                    size="large"
                  >
                    <Menu />
                  </IconButton>
                </Box>
              </Box>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                variant="temporary"
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default NavBarAcao;
