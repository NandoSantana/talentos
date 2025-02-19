import React from 'react';
import { Box, Button } from '@material-ui/core'; 
// import ArrowsDown from "../../assets/ArrowsDown.png";
import { Link as RouterLink } from "react-router-dom";
import './styleHome.css';

function Arrows(){
    return(
    <Box>
          <Box className="box-setaImg img1">
          <Button component={RouterLink} to="/contact">
            <Box className="btn">
              <p>Quero contratar</p>
            </Box>
          </Button>
          </Box>
          <Box className="box-setaImg img2">
          <Button component={RouterLink} to="/contact">
            <Box className="btn">
              <p>Quero contratar</p>
            </Box>
          </Button>
          </Box>
        </Box>
    )
}
export default Arrows;