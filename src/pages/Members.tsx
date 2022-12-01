import {alpha, Container, Grid, InputBase, styled} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Members() {
//tela inicia com uma barra de pesquisa ao lado um botao de novo cadastro.
    // abaixo terá um modal de cards com os membros.   acessando o membro pode editar, apagar, e mudar estatus
    // dessa tela apenas novos cadastros, lsitagem e pesquisa.
    return (
        <Container maxWidth="xl" sx={{
            position: 'relative',
            padding: '50px 25px 0 25px',
            overflowY: 'hidden',
            background: 'linear-gradient(180deg, #9400D3 0%, #FFF 100%)',
            boxShadow: 3,
            borderRadius: 2,
        }}>
            <Typography sx={{
                fontWeight: 'bold',
                fontSize: 'large',
            }}>
                Membros
            </Typography>
            <Grid container spacing={2} sx={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 1,
            }}>
                <Grid item md={6}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Pesquisar…"
                            inputProps={{'aria-label': 'search'}}
                        />
                    </Search>
                </Grid>
                <Grid item md={6}>
                    <Button
                        variant="contained"
                    >
                        Cadastrar Membro
                    </Button>
                </Grid>
            </Grid>


            {/*CONTAINER CARD MEMBROS*/}

            <Grid container spacing={2} sx={{
                display: 'flex',
                flexDirection: 'row',
                marginY: 2,
            }}>
                Card Membros
            </Grid>
        </Container>
    )
}