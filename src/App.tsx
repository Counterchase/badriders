import NavBar from './components/NavBar'
import Copyright from './components/Copyright'
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import AuthGoogleProvider from "./contextes/authGoogle";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PrivateRoutes from "./routes";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Members from "./pages/Members";
import NewMember from "./pages/NewMember";
import Settings from "./pages/Settings";


const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container maxWidth='100vw'
                       sx={{
                           width: '100vw',
                           height: '100vh',
                           position: 'fixed',
                           padding: '80px',
                           overflowY: 'hidden',
                           background: 'linear-gradient(180deg, #17151F 0%, #1C172B 100%)',
                           top: 0,
                           left: 0,
                       }}>
                <NavBar/>
                <Routes>
                    <Route element={<Login/>} path='/login'/>
                    <Route element={<PrivateRoutes/>} path='/'>
                        <Route element={<Home/>} path='/' exact/>
                        <Route element={<Members/>} path='/members' exact/>
                        <Route element={<NewMember/>} path={'/members/new-member'} exact/>
                        <Route element={<Settings/>} path={'/settings'} exact/>
                    </Route>
                </Routes>
                <Copyright/>
            </Container>
        </ThemeProvider>
    )
}

export default App