import React from 'react';
import { Box } from '@material-ui/core';
import SparkleImg from '../../assets/Sparkle.png';
import './styleHome.css';

function Sparkle(){
    return(
        <Box className="container-sparkle">
        <Box className="sparkle">
          <img src={SparkleImg} alt="sparkle" />
        </Box>
        <Box className="sparkle2">
          <img src={SparkleImg} alt="sparkle" />
        </Box>
      </Box>
    )
}

export default Sparkle;