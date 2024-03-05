import React from "react";
import {
    Typography,
    Card,
    CardContent,
    Grid,
    Button,
    List,
    ListItem,
    ListItemText,
    Box,
    Paper,
    Container,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import RedeemIcon from "@mui/icons-material/Redeem";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ListAltIcon from '@mui/icons-material/ListAlt'; 

function Dashboard() {
    return (
        <Container>
            <Box sx={{ padding: 2 }}>
                <Paper
                    elevation={1}
                    sx={{ backgroundColor: "primary.main", padding: 2, marginBottom: 2 }}
                >
                    <Typography
                        variant="h4"
                        component="h1"
                        gutterBottom
                        sx={{ color: "white" }}
                    >
                        DASHBOARD CLIENTE
                    </Typography>
                </Paper>

                <Grid container spacing={2} alignItems="stretch">
                <Grid item xs={12} md={6}>
                        <Card sx={{ height: "100%" }}>
                            <CardContent>
                                <AccountBalanceWalletIcon
                                    color="primary"
                                    sx={{ fontSize: 40 }}
                                />
                                <Typography variant="h5" gutterBottom>
                                    Saldo de Pontos
                                </Typography>
                                <Typography variant="h6">5.000 pontos</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <RedeemIcon color="primary" sx={{ fontSize: 40 }} />
                                <Typography variant="h6" gutterBottom>
                                    Meus Resgates
                                </Typography>
                                {/* Lista de resgates */}
                                <List dense>
                                    <ListItem>
                                        <ListItemText
                                            primary="Resgate de Pontos"
                                            secondary="TV 4K - 25/05/2024 - 15000 pts"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Resgate de Pontos"
                                            secondary="Smartphone XYZ - 15/06/2024 - 10000 pts"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Resgate de Pontos"
                                            secondary="Voucher de Desconto Loja ABC - 05/07/2024 - 500 pts"
                                        />
                                    </ListItem>
                                </List>

                                <Button variant="outlined" color="primary">
                                    Ver todos
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4} />
                    <Grid item xs={12} md={12}>
                        <Card>
                            <CardContent>
                            <ListAltIcon color="primary" sx={{ fontSize: 40 }} />
                            
                                <Typography variant="h6" color="textSecondary" gutterBottom>
                                    Extrato de Pontos
                                </Typography>
                                {/* Lista de extrato de pontos */}
                                <List dense>
                                    <ListItem>
                                        <ListItemText
                                            primary="Produto A - Compra 01/04/2024 - Loja X"
                                            secondary="+200 pontos - R$ 100,00"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Produto B - Compra 15/04/2024 - Loja Y"
                                            secondary="+300 pontos - R$ 150,00"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Produto C - Resgate 20/04/2024 - Prêmio Z"
                                            secondary="-500 pontos - Vale R$ 250,00"
                                        />
                                    </ListItem>
                                    {/* Continue adicionando itens conforme necessário */}
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
                <Grid
                    container
                    spacing={2}
                    sx={{ marginTop: 2, justifyContent: "center" }}
                >
                    {/* Botão Indicar Amigo */}
                    <Grid item xs={12} sm={4} md={2}>
                        <Button startIcon={<PersonAddIcon />} variant="outlined" fullWidth>
                            Indicar Amigo
                        </Button>
                    </Grid>
                    {/* Botão Contato */}
                    <Grid item xs={12} sm={4} md={2}>
                        <Button
                            startIcon={<ContactMailIcon />}
                            variant="outlined"
                            fullWidth
                        >
                            Contato
                        </Button>
                    </Grid>
                    {/* Botão Inserir Nota */}
                    <Grid item xs={12} sm={4} md={2}>
                        <Button
                            startIcon={<AddCircleOutlineIcon />}
                            variant="outlined"
                            fullWidth
                        >
                            Inserir Nota
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Dashboard;
