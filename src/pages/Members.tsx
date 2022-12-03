import {alpha, Box, Container, Grid, ImageList, ImageListItem, InputBase, styled} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMembers from "../components/CardMembers";
import {useEffect, useState} from "react";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import firebaseApp from "../api/firebase";

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

    const [members, setMembers] = useState([]);
    const db = getFirestore(firebaseApp);
    const dataCollectionRef = collection(db, 'members');
    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(dataCollectionRef);
            console.log("api log..")
            console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            setMembers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getData();
    }, [])

    const handleMembersCad = () => {

    }

    return (
        <Grid container spacing={2}>
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
                <Grid item xs={12} md={9} lg={10}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase/>
                    </Search>
                </Grid>
                <Grid item xs={8} md={3} lg={2}>
                    <Button variant='contained' onClick={handleMembersCad} href={'/members/new-member'}>
                        Cadastrar Membro
                    </Button>
                </Grid>
            </Grid>
            <Container
                maxWidth='xl'
                sx={{
                    mt: 2,
                    backgroundColor: 'primary.main',
                }}
            >
                <ImageList
                    sx={{
                        gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1Fr))!important',
                    }}>
                    {
                        members.map(i => {
                            return (
                                <ImageListItem key={i.id}>
                                    <CardMembers member={i}/>
                                </ImageListItem>
                            )
                        })
                    }
                </ImageList>
            </Container>
        </Grid>
    )
}