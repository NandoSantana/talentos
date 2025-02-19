import React from "react";
import Navbar from '../../componentes/Navbar/Navbar';
const LayoutNavbar = ({children}) => {
 

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
export default LayoutNavbar;
