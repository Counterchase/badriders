import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SettingsIcon from '@mui/icons-material/Settings';
import {Grid} from "@mui/material";
import {SportsMotorsports} from "@mui/icons-material";
import {Link} from "react-router-dom";

const pages = ['Mensalidades', 'Contas', 'Estatuto'];
const settings = ['Membros', 'Sair'];

export default function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleMembros = (event: React.MouseEvent<HTMLElement>) => {
    };

    const handleSede = () => {

    };

    const handleSettings = () => {

    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Box sx={{
                                textAlign: 'center'
                            }}>
                                <IconButton
                                    href='/'
                                    onClick={handleSede}
                                >
                                    <Tooltip title='Sede'>
                                        <HomeIcon fontSize='large'/>
                                    </Tooltip>
                                </IconButton>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box sx={{
                                textAlign: 'center'
                            }}>
                                <IconButton
                                    onClick={handleMembros}
                                    href='/members'
                                >
                                    <Tooltip title='Membros'>
                                        <SportsMotorsports fontSize='large'/>
                                    </Tooltip>
                                </IconButton>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box sx={{
                                textAlign: 'center'
                            }}>
                                <IconButton
                                    onClick={handleSettings}
                                    href='/settings'
                                >
                                    <Tooltip title='Configurações'>
                                        <SettingsIcon fontSize='large'/>
                                    </Tooltip>
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}