import {GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword} from 'firebase/auth';
import firebaseApp from "../api/firebase";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Copyright from "../components/Copyright";
import {useContext, useState} from "react";
import {Alert, colors} from "@mui/material";
import {AuthGoogleContext} from "../contextes/authGoogle";
import {Navigate} from "react-router-dom";


export default function Login() {

    const {signInGoogle, signed, user} = useContext(AuthGoogleContext)
    const auth = getAuth(firebaseApp);
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function LoginGoogle() {
        await signInGoogle();
    }


    const Login = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setEmail(data.get('email'))
        setSenha(data.get('password'))

        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                if (error.code === 'auth/user-not-found') {
                    setErrorMessage(' Email ou Senha Incorretos!!')
                } else if (error.code === 'auth/invalid-email') {
                    setErrorMessage('Preencha Todos os Campos!')
                }
            });
    };


    if (!signed) {
        return (
            <Container component="main" maxWidth="xs"
                       sx={{
                           borderRadius: 1,
                           backgroundColor: 'white',
                       }}>
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <Box component="form" onSubmit={Login} noValidate sx={{mt: 1}}>
                        {errorMessage ? (
                            <Alert variant={'outlined'} severity={'error'}
                                   sx={{color: 'red', fontSize: '12px',}}>{errorMessage}</Alert>) : ('')}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Lembre-me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Entrar
                        </Button>
                        <Typography textAlign='center' fontSize='12px'>
                            OU
                        </Typography>
                        <Button
                            fullWidth
                            variant="contained"
                            startIcon={<GoogleIcon/>}
                            onClick={LoginGoogle}
                            sx={{
                                mt: 3,
                                mb: 2,
                                backgroundColor: 'primary.main',
                            }}
                        >
                            Entrar com Google
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Esqueceu sua Senha?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Não tem uma Conta? Cadastre-se!!"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright/>
            </Container>
        )
    } else {
        return <Navigate to='/'/>;
    }
}