import React, {useState, useEffect} from "react";
import NavbarAcao from "../../componentes/Navbar/Navbar-acao";

const LayoutNavbarAcao = ({children}) => {
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
  return (
    <>
      <NavbarAcao acao={ativaCor} />
      {children}
    </>
  );
};
export default LayoutNavbarAcao;
