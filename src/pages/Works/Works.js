import React from "react";
// import Banner from "../../assets/BannerTrab-conosco.png";
import { Box, Button, Drawer, ButtonBase, Divider } from "@material-ui/core";
import "./index.css";
import vacancies from "./Vacancies";
import { ArrowForwardIos, ArrowBack } from "@material-ui/icons";
import { Link } from "react-router-dom";

function Works() {
  const vacancie = vacancies;
  const [result, setResult] = React.useState("");

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open, item) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    setResult(item);
  };

  var item = vacancies.find(function (element) {
    return element.id === result;
  });

  const list = (anchor) => (
    <Box>
      <Box className="drawer-container">
        <Box className="header-drawer">
          <ButtonBase
            onClick={toggleDrawer(anchor, false)}
            onClose={toggleDrawer(anchor, false)}
          >
            <ArrowBack style={{ fontSize: 30 }} className="seta-drawer" />
          </ButtonBase>
          <p>Detalhes da vaga</p>
        </Box>
        <Box style={{ height: "100%" }} className="vacancies-drawer">
          <Box className="title-card-vacancies">
            <p>{item?.title}</p>
          </Box>
          <Box>
            <p>{item?.detail}</p>
          </Box>
          <Divider />
          <Box>
            <p>{item?.requirements}</p>
          </Box>
          <Divider />
          <Box>
            <p>{item?.competence}</p>
          </Box>
          <Divider />
          <Box>
            <p>{item?.formation}</p>
          </Box>
          <Divider />
          <Box>
            <p>{item?.information}</p>
            <Box sx={{ marginTop: 40, marginBottom: 40 }}>
              <Link to={"form/" + item?.id} className="link-drawer">
                Clique aqui e cadastre-se
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <div>
      {/* <Box className="navbar-menu" />
      <Box className="banner">
        <img
          src={Banner}
          alt="Banner trabalhe conosco"
          className="banner-img"
        />
        <Box className="text-banner-works">
          <p>Venha fazer parte da GIS</p>
        </Box>
      </Box>
      <Box className="container-text">
        <Box className="title-work">
          <p>Por que trabalhar na Gis?</p>
        </Box>
        <Box className="text-work">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
            tellus ultricies, tempor ligula sed, semper nunc. Mauris vel massa
            facilisis, congue dui sit amet, tristique ipsum. Cras in ex et augue
            faucibus volutpat. Fusce ullamcorper quam vel interdum facilisis.
            Aliquam vitae tincidunt elit. Nunc euismod justo porta nisl
            efficitur tincidunt. Pellentesque quis odio in mauris sodales semper
            et at sapien. Aliquam et elementum tortor. Donec eu tellus mauris.
            Proin in felis hendrerit, laoreet nunc sit amet, hendrerit enim. Nam
            rhoncus id purus eleifend pulvinar. Phasellus eu lectus efficitur,
            hendrerit mi a, laoreet enim. Donec ipsum tortor, molestie sit amet
            convallis pretium, auctor vitae justo. Nunc fermentum fermentum
            bibendum. Pellentesque in fermentum metus, sit amet dignissim nisl.
            Mauris interdum, dui vitae auctor tempus, orci quam aliquet dolor,
            efficitur vulputate enim nisl a libero.
          </p>
        </Box>
      </Box>
      <Box>
        <Box className="title-work">
          <p>Confira nossas vagas</p>
        </Box> */}
      <Box className="container-cards-vacancies">
        {vacancie.map((item, index) => (
          <Box className="card-vacancies" key={item.id}>
            <Box className="title-card-vacancies">
              <p>{item.title}</p>
            </Box>
            <Box className="text-card-vacancies">
              <p>{item.detail}</p>
            </Box>
            <Box>
              {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Box sx={{ height: 67, width: 190 }}>
                    <Button
                      endIcon={<ArrowForwardIos />}
                      onClick={toggleDrawer(anchor, true, item.id)}
                      className="btn-vacancie"
                    >
                      Saiba mais
                    </Button>
                  </Box>

                  <Drawer anchor={anchor} open={state[anchor]}>
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      {/* </Box> */}
    </div>
  );
}
export default Works;
