import React from "react";

const ValidacoesCadastro = React.createContext({
  cpf: semValidar,
  senha: semValidar,
  nome: semValidar,
});

function semValidar(dados){
    console.log(dados)
    return {valido: true, texto: ""}
}

export default ValidacoesCadastro;
