import {Link, Typography} from "@mui/material";


export default function Copyright(props: any) {
    return (
        <Typography variant="body2" color="initial" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="badriders.com.br">
                Bad Riders Bando
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}