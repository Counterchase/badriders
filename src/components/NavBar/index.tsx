import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Grid from "@mui/material/Grid";


export default function NavBar() {
    const [value, setValue] = React.useState(0);

    return (
        <Grid item container spacing={2}>
            <Grid item xl={12} sx={{
                width: '100vh',
            }}>
                <BottomNavigation
                    sx={{
                        boxShadow: 3,
                        borderRadius: 2,
                        marginBottom: 0.5,
                        backgroundColor: 'primary.light',
                    }}
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction href='/' label="Sede" icon={<HomeIcon/>}/>
                    <BottomNavigationAction href='/members' label="Membros" icon={<SportsMotorsportsIcon/>}/>
                    <BottomNavigationAction href='settings' label="Configurações" icon={<SettingsIcon/>}/>
                </BottomNavigation>
            </Grid>
        </Grid>
    );
}