import React, { Component } from "react";
import { Container, Typography } from "@material-ui/core";
import "./App.css";
import FormularioCadastro from "./components/FomularioCadastro/FormularioCadastro";
import "fontsource-roboto";
import { validarCPF, validarSenha } from "./models/cadastro";
import ValidacoesCadastro from "./context/ValidacoesCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography component="h1" variant="h3" align="center">
          Formulário de cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}
        >
          <FormularioCadastro aoEnviar={receberDados} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function receberDados(dados) {
  console.log(dados);
}

export default App;
