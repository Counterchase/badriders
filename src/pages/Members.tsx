import {alpha, Container, Grid, InputBase, styled} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMembers from "../components/CardMembers";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.35),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.65),
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
            width: '70vw',
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
        <Grid container spacing={2} flexDirection='column'>
            <Grid item>
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        color: '#fff',
                        fontSize: 'large',
                    }}
                >
                    Membros
                </Typography>
            </Grid>
            <Grid item container spacing={2}>
                <Grid item xs={12} md={6} lg={10}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase/>
                    </Search>
                </Grid>
                <Grid item xs={8} md={6} lg={2}>
                    <Button variant='contained'>
                        Cadastrar Membro
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}