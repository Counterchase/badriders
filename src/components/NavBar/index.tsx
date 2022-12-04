import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {useContext} from "react";
import {AuthGoogleContext} from "../../contextes/authGoogle";

export default function NavBar() {

    const {signOut} = useContext(AuthGoogleContext)


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
            <BottomNavigationAction onClick={() => {
                signOut()
            }} label="Sair" icon={<ExitToAppIcon/>}/>
        </BottomNavigation>
    );
}