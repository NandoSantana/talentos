import React, { useState } from "react";
import { Box, Backdrop, Fade, Modal, ButtonBase } from "@material-ui/core";
import Slider from "react-slick";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DatePicker from "sassy-datepicker";

import "moment/locale/pt-br";

const Data = [
  {
    title: "ter",
    text: "12 de abril"
  },
  {
    title: "ter",
    text: "12 de abril"
  },
  {
    title: "ter",
    text: "12 de abril"
  },
  {
    title: "ter",
    text: "12 de abril"
  },
  {
    title: "ter",
    text: "12 de abril"
  },
  {
    title: "ter",
    text: "12 de abril"
  },
  {
    title: "ter",
    text: "12 de abril"
  }
];
const Hora = [
  { hora: "13:00" },
  { hora: "14:00" },
  { hora: "15:00" },
  { hora: "16:00" },
  { hora: "17:00" },
  { hora: "18:00" }
];
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onChange = (date) => {
    console.log(date.toString());
  };
  return (
    <Box sx={{ width: "100%", height: 200 }}>
      <Slider {...settings}>
        {Data.map((item) => (
          <Box style={{}}>
            <Box className="circle" onClick={handleOpen}>
              <p>{item.title}</p>
              <p>{item.text}</p>
            </Box>
          </Box>
        ))}
      </Slider>
      <Box>
        <Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          className="modal"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open}>
            <Box className="paper">
              <h2>Escolha a melhor data e horário para você!</h2>
              <Box className="container-paper">
                <Box>
                  <p>Qual Horário você prefere?</p>
                  {Hora.map((item) => (
                    <Box className="container-hora">
                      <ButtonBase>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%"
                          }}
                        >
                          <Box>
                            <p>{item.hora}</p>
                          </Box>
                        </Box>
                      </ButtonBase>
                    </Box>
                  ))}
                  <button className="btn-confirmar">Confirmar</button>
                </Box>
                <Box className="calendar">
                  <DatePicker onChange={onChange} />
                </Box>
              </Box>
            </Box>
          </Fade>
        </Modal>
      </Box>
    </Box>
  );
};

export default Carousel;
