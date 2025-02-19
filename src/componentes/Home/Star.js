import React from 'react';
import { Box } from '@material-ui/core';
import Estrela from '../../assets/Estrela.png';
import "./styleHome.css";

function StarHome(){
    return(
        <Box className="box-estrela">
          <img src={Estrela} alt="Ilustração de seta apontando para baixo" />
        </Box>
    )
}

export default StarHome;