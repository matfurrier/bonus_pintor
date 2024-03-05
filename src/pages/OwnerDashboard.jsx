import React from 'react';
import { Container, Box, Grid, Card, CardContent, Typography, Paper } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import PeopleIcon from '@mui/icons-material/People';
import ReceiptIcon from '@mui/icons-material/Receipt';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import RedeemIcon from '@mui/icons-material/Redeem';

// ... restante dos seus imports

const metrics = [
  { title: 'Pontos Inseridos', value: '1.234', icon: <InsertChartIcon /> },
  { title: 'Nfs Cadastradas', value: '567', icon: <ReceiptIcon /> },
  { title: 'Usuários Cadastrados', value: '89', icon: <PeopleIcon /> },
  { title: 'Ticket Médio das NFs', value: 'R$ 210,00', icon: <MonetizationOnIcon /> },
  { title: 'Resgates Concedidos', value: '123', icon: <RedeemIcon /> }
];

function OwnerDashboard() {
  return (
    <Container>
      <Box sx={{ padding: 2 }}>
        {/* Header do Dashboard do Proprietário */}
        <Typography variant="h4" gutterBottom>
          Dashboard do Proprietário
        </Typography>
        
        <Grid container spacing={2}>
          {metrics.map((metric, index) => (
            <Grid item xs={12} sm={4} md={2.4} key={index}>
              <Card>
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
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
        <Paper elevation={3} sx={{ margin: '24px 0', padding: 2 }}>
          <Typography variant="h6">Pontos Inseridos por Dia</Typography>
          {/* Componente de gráfico aqui */}
        </Paper>
        
        {/* Lista dos 10 maiores pontuadores */}
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h6">Top 10 Pontuadores</Typography>
          {/* Lista dos pontuadores aqui */}
        </Paper>
      </Box>
    </Container>
  );
}

export default OwnerDashboard;
