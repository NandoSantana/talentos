import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact/Contact";
import Agenda from "./pages/Agenda";
import Blog from "./pages/Blog/Blog";
import FormVacancies from "./pages/Works/FormVacancies";
import Footer from "./componentes/Footer/Footer";
import Scroll from "./componentes/ScrollTop/ScrollTop";
import NavBarAcao from "./componentes/Navbar/Navbar-acao";
import Matter from "./pages/Blog/Matter";
import Works from "./pages/Works/Works";
import AgencyDigital from "./pages/DigitalAgency/DigitalAgency";

function App() {
  const [ativaCor, setAtivaCor] = useState(false);

  useEffect(function () {
    function posicaoScroll() {
      if (window.scrollY > 150) {
        setAtivaCor(true);
      } else {
        setAtivaCor(false);
      }
    }
    window.addEventListener("scroll", posicaoScroll);
  }, []);
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);
  return (
    <Box>
      <NavBarAcao acao={ativaCor} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/service/" element={<Service />} />
        <Route path="/Contact/" element={<Contact />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/matter/:id" element={<Matter />} />
        <Route path="/works" element={<Works />} />
        <Route path="agencyDigital/form/:id" element={<FormVacancies />} />
        <Route path="/agencyDigital" element={<AgencyDigital />} />
      </Routes>
      <Scroll />
      <Footer />
    </Box>
  );
}

export default App;
