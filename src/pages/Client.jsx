import React from "react";
import { Container, Box, Grid, Card, CardContent, Typography, Paper, List, ListItem, ListItemText, Button } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"; // Ícone para saldo de pontos
import DescriptionIcon from "@mui/icons-material/Description"; // Ícone para notas cadastradas
import TimelineIcon from "@mui/icons-material/Timeline"; // Ícone para gráfico
import ListAltIcon from "@mui/icons-material/ListAlt"; // Ícone para extrato de pontos

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { dia: "01/02/24", pontos: 20 },
    { dia: "12/02/24", pontos: 45 },
    { dia: "28/02/24", pontos: 65 },
    { dia: "03/03/24", pontos: 100 },
    { dia: "07/03/24", pontos: 110 },
    { dia: "09/04/24", pontos: 210 },
    { dia: "11/04/24", pontos: 225 },
    { dia: "19/04/24", pontos: 300 },
];

function ClienteDashboard() {
    return (
        <Container>
            <Box sx={{ padding: 2 }}>
                {/* Título do Dashboard */}
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

                {/* Cards de Informações */}
                <Grid container spacing={2}>
                    <Grid item xs={6} >
                        <InfoCard title="Saldo de Pontos" value="1.234" Icon={AccountBalanceWalletIcon} />
                    </Grid>
                    <Grid item xs={6} >
                        <InfoCard title="Notas Cadastradas" value="10" Icon={DescriptionIcon} />
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={3} sx={{ margin: "24px 0", padding: 2 }}>
                            <Typography variant="h6">Progresso de Pontos</Typography>
                            <TimelineIcon color="primary" sx={{ verticalAlign: 'bottom', mr: 1 }} />
                            <AreaChart width={1000} height={250} data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="dia" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="pontos" stroke="#8884d8" fillOpacity={1} fill="#8884d8" />
                            </AreaChart>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} >
                    <Paper elevation={3} sx={{ margin: "24px 0", padding: 2 }}>
                        
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
                                            secondary="+50 pontos - R$ 100,00"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Produto B - Compra 15/04/2024 - Loja Y"
                                            secondary="+80 pontos - R$ 150,00"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Produto C - Resgate 20/04/2024 - Prêmio Z"
                                            secondary="-200 pontos - Vale R$ 250,00"
                                        />
                                    </ListItem>
                                    {/* Continue adicionando itens conforme necessário */}
                                </List>
                            </CardContent>
                        
                    </Paper>
                    </Grid>
                </Grid>

                {/* Botões de Ação */}
                <ActionButtons />
            </Box>
        </Container>
    );
}

// Componente para os cards de informações
function InfoCard({ title, value, Icon }) {
    return (
        <Card>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <Icon color="primary" sx={{ fontSize: 40, marginRight: 2 }} />
                <Box>
                    <Typography variant="subtitle1">{title}</Typography>
                    <Typography variant="h6">{value}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

// Componente para os botões de ação
function ActionButtons() {
    return (
        <Grid container spacing={2} sx={{ marginTop: 2, justifyContent: "center" }}>
            {/* Botão Indicar Amigo */}
            <Grid item xs={12} sm={4} md={2}>
                <Button startIcon={<PersonAddIcon />} variant="outlined" fullWidth>
                    Indicar Amigo
                </Button>
            </Grid>
            {/* Botão Contato */}
            <Grid item xs={12} sm={4} md={2}>
                <Button startIcon={<ContactMailIcon />} variant="outlined" fullWidth>
                    Contato
                </Button>
            </Grid>
            {/* Botão Inserir Nota */}
            <Grid item xs={12} sm={4} md={2}>
                <Button startIcon={<AddCircleOutlineIcon />} variant="outlined" fullWidth>
                    Inserir Nota
                </Button>
            </Grid>
        </Grid>
    );
}

export default ClienteDashboard;
