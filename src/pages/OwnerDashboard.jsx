import React from "react";
import {
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import PeopleIcon from "@mui/icons-material/People";
import ReceiptIcon from "@mui/icons-material/Receipt";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RedeemIcon from "@mui/icons-material/Redeem";
import TimelineIcon from '@mui/icons-material/Timeline'; // Ícone para o gráfico
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'; // Ícone para a lista de pontuadores
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';

const metrics = [
  { title: "Pontos Inseridos", value: "1.234", icon: <InsertChartIcon color="primary" /> },
  { title: "Nfs Cadastradas", value: "567", icon: <ReceiptIcon color="primary" /> },
  { title: "Usuários Cadastrados", value: "89", icon: <PeopleIcon color="primary" /> },
  { title: "Ticket Médio das NFs", value: "R$ 210,00", icon: <MonetizationOnIcon color="primary" />, },
  { title: "Resgates Concedidos", value: "123", icon: <RedeemIcon color="primary" /> },
];

const data = [
  { dia: "01/03/24", pontos: 400 },
  { dia: "02/03/24", pontos: 300 },
  { dia: "03/03/24", pontos: 200 },
  { dia: "04/04/24", pontos: 278 },
  { dia: "05/04/24", pontos: 189 },
  { dia: "06/04/24", pontos: 239 },
  { dia: "07/04/24", pontos: 349 },
  { dia: "08/04/24", pontos: 278 },
  { dia: "09/04/24", pontos: 189 },
  { dia: "10/04/24", pontos: 239 },
  { dia: "11/04/24", pontos: 349 },
];

const pontuadores = [
  { nome: "Ana Silva", pontos: "5.200" },
  { nome: "Roberto Dias", pontos: "4.800" },
  { nome: "Mariana Costa", pontos: "4.500" },
  { nome: "Carlos Souza", pontos: "5.200" },
  { nome: "Débora Silva", pontos: "4.800" },
  { nome: "Carla Santos", pontos: "4.500" },
  // Adicione mais objetos conforme necessário
];

function OwnerDashboard() {
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
            DASHBOARD PROPRIETÁRIO
          </Typography>
        </Paper>

        <Grid container spacing={2} alignItems="stretch">
          {metrics.map((metric, index) => (
            <Grid item xs={12} sm={4} md={2.4} key={index}>
              <Card>
                <CardContent sx={{ display: "flex", alignItems: "center" }}>
                  {metric.icon}
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="h6">{metric.title}</Typography>
                    <Typography variant="subtitle1">{metric.value}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Gráfico de Linha */}
        <Paper elevation={3} sx={{ margin: "24px 0", padding: 2 }}>
          <Typography variant="h6">Pontos Inseridos por Dia</Typography>
          <TimelineIcon color="primary" sx={{ verticalAlign: 'bottom', mr: 1 }} />
          <AreaChart width={1100} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dia" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="pontos" stroke="#8884d8" fillOpacity={1} fill="lightblue" />
          </AreaChart>
        </Paper>

        {/* Lista dos 10 maiores pontuadores */}
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h6">
            <FormatListNumberedIcon color="primary" sx={{ verticalAlign: 'bottom', mr: 1 }} />
            Top 10 Pontuadores
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <List>
                {pontuadores.slice(0, 5).map((pontuador, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={`${index + 1}. ${pontuador.nome}`} secondary={`Pontos: ${pontuador.pontos}`} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={6}>
              <List>
                {pontuadores.slice(5, 10).map((pontuador, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={`${index + 6}. ${pontuador.nome}`} secondary={`Pontos: ${pontuador.pontos}`} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}

export default OwnerDashboard;
