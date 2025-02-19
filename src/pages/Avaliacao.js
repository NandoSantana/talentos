import { Link } from 'react-router-dom';
import * as React from "react";
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Logo from "./../assets/Logo.png";

function Avaliacao() {
    return <div>
        <Box sx={{
            display: 'flex', marginTop: "52px",
            marginLeft: "62px",

        }}>
            <Box>
                {/* Box logo */}
                <img src={Logo} ></img>
            </Box>

            <nav style={{
            }}>

                <Link to="sobre">Sobre nós</Link> /
                <Link to="servicos">Serviços</Link> /
                <Link to="estudocasos">Estudos de casos</Link> /
                <Link to="blog">Blog</Link> /
                <Link to="contato">Contato</Link>
            </nav>
        </Box >

        <Box style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/*O que fazemos*/}
            <Box sx={{ borderRadius: "15px", marginTop: "190px", borderColor: "#FE2B75", fontWeigth: "bold", fontSize: 48, color: "#FE2B75" }}>
                Estudo de casos
            </Box>
        </Box>

        <Box>
            Como nós ajudamos empresas a transformar seu negócio.
        </Box>

        <Box sx={{ background: "#FF347B" }}>
            <Box>


            </Box>

            <Box>

            </Box>
        </Box>
    </div >
}

export default SobreNos;