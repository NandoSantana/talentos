import React from 'react';
import { ArrowUpward } from "@material-ui/icons";
import { Box, ButtonBase } from "@material-ui/core";
import "./ScrollStyle.css";

function Scroll() {
  var scrollTop = function () {
    window.scrollTo(0, 0);
  };

  return (
    <Box className="scroll">
      <Box className='container-scroll'>
        <ButtonBase onClick={scrollTop}>
          <ArrowUpward />
        </ButtonBase>
      </Box>
    </Box>
  );
}
export default Scroll;
