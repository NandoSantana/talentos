import { Helmet } from 'react-helmet';
import {
    Box,
    Container,
    Typography
} from '@material-ui/core';


const NotFound = () => (
    <>
        <Helmet>
            <title>404 | GIS</title>
        </Helmet>

        <Box>
            <Container>
                <Typography>
                    404: A página que você está procurando não foi encontrada
                </Typography>

            </Container>
        </Box>
    </>
)

export default NotFound;