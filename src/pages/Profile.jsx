import React from 'react';
import { TextField, Button, Typography } from '@mui/material';

function Profile() {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4">Perfil do Usuário</Typography>
      <TextField label="Nome" variant="outlined" fullWidth margin="normal" />
      <TextField label="E-mail" variant="outlined" fullWidth margin="normal" />
      <TextField label="Telefone" variant="outlined" fullWidth margin="normal" />
      <Button variant="contained" color="primary">Atualizar Perfil</Button>
    </div>
  );
}

export default Profile;
