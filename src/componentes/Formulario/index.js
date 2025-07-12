import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { useState } from 'react'

const Formulario = (props) => {
  const funcoes = ["Duelista", "Iniciador", "Controlador", "Sentinela"];

  const [nome, setNome] = useState("");
  const [nick, setNick] = useState("");
  const [imagem, setImagem] = useState("");
  const [funcao, setFuncao] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoJogadorCadastrado({
      nome,
      nick,
      imagem,
      funcao
    })
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do jogador.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Nick"
          placeholder="Digite o seu nick"
          valor={nick}
          aoAlterado={(valor) => setNick(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa 
        obrigatorio={true} 
        label="Função" 
        itens={funcoes}
        valor={funcao}
        aoAlterado={valor=> setFuncao(valor)} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
