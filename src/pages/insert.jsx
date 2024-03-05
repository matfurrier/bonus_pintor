import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  List,
  ListItem,
  ListItemText,
  Paper,
    Grid,
} from "@mui/material";

function NotaFiscalInsercao() {
  const [chaveNota, setChaveNota] = useState("");
  const [produtoSelecionado, setProdutoSelecionado] = useState("");
  const [quantidade, setQuantidade] = useState("");

  // Lista fictícia de produtos participantes
  const produtos = [
    { id: 1, nome: "Produto A" },
    { id: 2, nome: "Produto B" },
    { id: 3, nome: "Produto C" },
    { id: 4, nome: "Produto D" },
    { id: 5, nome: "Produto E" },
    // Adicione mais produtos conforme necessário
  ];

  const produtosAdicionadosFicticios = [
    { nome: "Produto X", quantidade: 2 },
    { nome: "Produto Y", quantidade: 3 },
    { nome: "Produto Z", quantidade: 1 },
  ];

  const limparFormulario = () => {
    setChaveNota("");
    setProdutoSelecionado("");
    setQuantidade("");
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 4 }}>
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
                        INSERÇÃO DE NOTA FISCAL
                    </Typography>
                </Paper>
        <TextField
          fullWidth
          label="Chave da Nota Fiscal"
          value={chaveNota}
          onChange={(e) => setChaveNota(e.target.value)}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Produto</InputLabel>
          <Select
            value={produtoSelecionado}
            label="Produto"
            onChange={(e) => setProdutoSelecionado(e.target.value)}
          >
            {produtos.map((produto) => (
              <MenuItem key={produto.id} value={produto.id}>
                {produto.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Quantidade"
          type="number"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          margin="normal"
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button variant="contained" color="primary">
            Confirmar
          </Button>
          <Button variant="outlined" onClick={limparFormulario}>
            Limpar
          </Button>
          <Button variant="contained" color="error">
            Cancelar
          </Button>
        </Box>
        {/* Lista de Produtos Fictícios Adicionados */}
        <Paper sx={{ mt: 2 }}>
  <Typography variant="h6" sx={{ p: 2 }}>Produtos Adicionados</Typography>
  <List sx={{ width: '100%' }}>
    {produtosAdicionadosFicticios.map((produto, index) => (
      <ListItem key={index} divider sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Grid container>
          <Grid item xs={6}>
            <ListItemText primary={produto.nome} />
          </Grid>
          <Grid item xs={6}>
            <ListItemText primary={`Quantidade: ${produto.quantidade}`} />
          </Grid>
        </Grid>
      </ListItem>
    ))}
  </List>
</Paper>

        {/* Botão Enviar */}
        <Button variant="contained" color="success" sx={{ mt: 2 }}>
          Enviar
        </Button>
      </Box>
    </Container>
  );
}

export default NotaFiscalInsercao;
