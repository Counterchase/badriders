import Grid from "@mui/material/Grid";
import {Image} from "@mui/icons-material";
import {Box, Typography} from "@mui/material";
import CakeIcon from '@mui/icons-material/Cake';
import SchoolIcon from '@mui/icons-material/School';
import BadgeIcon from '@mui/icons-material/Badge';
import HomeIcon from '@mui/icons-material/Home';
import VerifiedIcon from '@mui/icons-material/Verified';

type CardProps = {
    member: {
        name: string,
    }
}

export default function CardMember({member}: CardProps) {


    return (
        <Grid container spacing={2} sx={{
            boxShadow: 2,
            padding: 2,
            textAlign: 'left',
            alignItems: 'center',

        }}>
            <Grid item xs={4} lg={2}>
                <Image>
                </Image>
                <Typography>
                    "CARGO"
                </Typography>
            </Grid>
            <Grid item xs={8} lg={10}>
                <Box>
                    <Typography>
                        <BadgeIcon/>
                        Nome:
                    </Typography>
                    <Typography>
                        <HomeIcon/>
                        Unidade:
                    </Typography>
                    <Typography>
                        <CakeIcon/>
                        Data de Nascimento:
                    </Typography>
                    <Typography>
                        <SchoolIcon/>
                        Ano de Ingresso:
                    </Typography>
                    <Typography>
                        <VerifiedIcon/>
                        Status:
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}