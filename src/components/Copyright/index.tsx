import {Box, Link, Typography} from "@mui/material";


export default function Copyright(props: any) {
    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 0,
                width: '100vw',
                justifyContent: 'center',
            }}
        >
            <Typography variant="body2" color="initial" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="badriders.com.br">
                    Bad Riders Bando
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>

    );
}