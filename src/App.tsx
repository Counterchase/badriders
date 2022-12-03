import NavBar from './components/NavBar'
import Copyright from './components/Copyright'
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
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
            <BrowserRouter>
                <Container
                    maxWidth='100vw'
                    sx={{
                        width: '100vw',
                        height: '100vh',
                        position: 'fixed',
                        padding: '80px',
                        overflowY: 'hidden',
                        background: 'linear-gradient(180deg, #17151F 0%, #1C172B 100%)',
                        top: 0,
                        left: 0,
                    }}
                >
                    <NavBar/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/members' element={<Members/>}/>
                        <Route path='/members/new-member' element={<NewMember/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                    <Copyright/>
                </Container>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App