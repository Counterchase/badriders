import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Container, ToggleButton} from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import Switch from '@mui/material/Switch';
import BackspaceIcon from '@mui/icons-material/Backspace';
import {useEffect, useState} from "react";
import {collection, getFirestore, addDoc} from "firebase/firestore";
import firebaseApp from "../api/firebase";
import NavBar from "../components/NavBar";

export default function NewMember() {
    const [name, setName] = useState('');
    const [cargo, setCargo] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [unidade, setUnidade] = useState('');
    const [anoIngresso, setAnoIngresso] = useState('');
    const [foto, setFoto] = useState('');
    const [status, setStatus] = useState(false);

    async function handleSubmit() {
        try {
            const member = await addDoc(collection(getFirestore(firebaseApp), 'members'), {
                name,
                cargo,
                dataNascimento,
                unidade,
                anoIngresso,
                //foto,
                status
            });
            alert('Membro Cadastrado!!');
            console.log(member);
        } catch (err) {
            alert('Ocorreu Algo Errado!!')
            console.log(err)
        }
    };


    return (
        <>
            <Container
                sx={{
                    backgroundColor: 'primary.light',
                    paddingY: 2,
                }}>
                <Typography variant="h6" gutterBottom>
                    Cadastro de Membros
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            label="Nome Completo"
                            fullWidth
                            autoComplete="given-name"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            value={cargo}
                            onChange={(e) => setCargo(e.target.value)}
                            id="cargo"
                            name="cargo"
                            label="Cargo"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            value={dataNascimento}
                            onChange={(e) => setDataNascimento(e.target.value)}
                            id="aniversario"
                            name="aniversario"
                            label="Data de Nacimento"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            value={unidade}
                            onChange={(e) => setUnidade(e.target.value)}
                            id="unidade"
                            name="unidade"
                            label="Unidade"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            value={anoIngresso}
                            onChange={(e) => setAnoIngresso(e.target.value)}
                            id="ingresso"
                            name="ingresso"
                            label="Data de Ingresso"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            value={foto}
                            onChange={(e) => setFoto(e.target.value)}
                            label="FOTO"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Status</Typography>
                        <Switch checked={status} onChange={(e) => setStatus(e.target.checked)}
                                aria-label="Status"/>
                    </Grid>
                    <Grid item xs={12} textAlign='right'>
                        <Button startIcon={<BackspaceIcon/>} variant='contained' href={'/members'} sx={{
                            backgroundColor: 'secondary.main',
                        }}>
                            Cancelar
                        </Button>
                        <Button
                            sx={{
                                ml: 1,
                            }}

                            endIcon={<SendIcon/>}
                            variant='contained'
                            onClick={handleSubmit}
                        >
                            Cadastrar
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}