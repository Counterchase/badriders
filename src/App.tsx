import NavBar from './components/NavBar'
import Copyright from './components/Copyright'
import {Container, createTheme, CssBaseline, Grid, ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Settings from "./pages/Settings";


const theme = createTheme()

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>
                <Container maxWidth="xl" sx={{
                    width: '100vw',
                    height: '100vh',
                    position: 'relative',
                    padding: '50px 25px 0 25px',
                    overflowY: 'hidden',
                    background: 'linear-gradient(180deg, #17151F 0%, #1C172B 100%)',
                }}>
                    <NavBar/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/members' element={<Members/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                    <Copyright/>
                </Container>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
