import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

export default function NavBar() {
    return (
        <BottomNavigation
            showLabels
            sx={{
                backgroundColor: 'primary.light',
                width: '100vw',
                height: '70px',
                justifyContent: 'space-around',
                position: 'fixed',
                top: 0,
                left: 0,
            }}
        >
            <BottomNavigationAction href={'/'} label="Sede" icon={<HomeIcon/>}/>
            <BottomNavigationAction href={'/members'} label="Membros" icon={<SportsMotorsportsIcon/>}/>
            <BottomNavigationAction href={'/settings'} label="Configurações" icon={<SettingsIcon/>}/>
        </BottomNavigation>
    );
}