import { Navigate } from 'react-router-dom';

// import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Service from './pages/Service';
import EstudoCasos from './pages/EstudoCaso';
import Contatos from './pages/Contato';
import Agenda from './pages/Agenda';
import Blog from './pages/Blog';
import FazerAplicativo from './pages/FazerAplicativo';
import Cadastrar from './pages/CadastrarBancoTalentos';
import Vagas from './pages/ProgramaTalentoVaga';
import NotFound from './pages/NotFound';

const routes = [
    {
        path: "app",
        element: <HomePage />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'about', element: <About /> },
            { path: 'service', element: <Service /> },
            { path: 'estudoCasos', element: <EstudoCasos /> },
            { path: 'contato', element: <Contatos /> },
            { path: 'agenda', element: <Agenda /> },
            { path: 'blog', element: <Blog /> },
            { path: 'fazerAplicativo', element: <FazerAplicativo /> },
            { path: 'cadastrar', element: <Cadastrar /> },
            { path: 'Vagas', element: <Vagas/> },
            { path: "*", element: <Navigate to="/404" /> }
        ]
    },
    {
        path: "/",
        children: [
            { path: "404", element: <NotFound /> },
            { path: "*", element: <Navigate to="/404" /> }
        ]
    }

]

export default routes;