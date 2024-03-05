import React from 'react';
import { Button, TextField, Typography } from '@mui/material';

function Login() {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4">Login</Typography>
      <TextField label="E-mail" variant="outlined" fullWidth margin="normal" />
      <TextField label="Senha" type="password" variant="outlined" fullWidth margin="normal" />
      <Button variant="contained" color="primary" fullWidth>Login</Button>
    </div>
  );
}

export default Login;
