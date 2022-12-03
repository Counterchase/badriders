import Grid from "@mui/material/Grid";
import {Image} from "@mui/icons-material";
import {Box, IconButton, Tooltip, Typography, Container} from "@mui/material";
import CakeIcon from '@mui/icons-material/Cake';
import SchoolIcon from '@mui/icons-material/School';
import BadgeIcon from '@mui/icons-material/Badge';
import HomeIcon from '@mui/icons-material/Home';
import VerifiedIcon from '@mui/icons-material/Verified';
import CancelIcon from '@mui/icons-material/Cancel';
import InstagramIcon from '@mui/icons-material/Instagram';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

type CardMemberProps = {
    member: {
        img: string,
        name: string,
        unidade: string,
        cargo: string,
        dataNascimento: string,
        anoIngresso: string,
        status: boolean
    }
}

export default function CardMember({member}: CardMemberProps) {


    return (
        <Container
            sx={{
                backgroundColor: 'primary.light',
            }}>
            <Grid container>
                <Grid item xs={3} sm={3} lg={3}
                      sx={{
                          textAlign: 'center',
                      }}>
                    <Image>
                    </Image>
                    <Typography>
                        {member.cargo}
                    </Typography>
                </Grid>
                <Grid item xs={8} sm={9} lg={9}>
                    <Box>
                        <Typography>
                            <BadgeIcon/>
                            {member.name}
                        </Typography>
                        <Typography>
                            <HomeIcon/>
                            Unidade: {member.unidade}
                        </Typography>
                        <Typography>
                            <CakeIcon/>
                            Aniversário: {member.dataNascimento}
                        </Typography>
                        <Typography>
                            <SchoolIcon/>
                            Colete: {member.anoIngresso}
                        </Typography>
                        <Typography>
                            {member.status ? (
                                <VerifiedIcon
                                    sx={{color: 'green', backgroundColor: 'black', borderRadius: '50%'}}/>) : (
                                <CancelIcon sx={{color: '#FF0000', backgroundColor: 'black', borderRadius: '50%'}}/>)}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item container
                      sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                      }}
                >
                    <Tooltip title='Editar'>
                        <IconButton sx={{color: 'black',}}>
                            <EditIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Instagram'>
                        <IconButton
                            sx={{
                                color: 'black',
                            }}>
                            <InstagramIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Apagar'>
                        <IconButton
                            sx={{
                                color: 'black',
                            }}>
                            <DeleteForeverIcon/>
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
        </Container>
    )
}