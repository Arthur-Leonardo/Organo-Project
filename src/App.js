import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {

  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdicionado = (jogador) =>{
    console.log(jogador)
    jogador.push(setJogadores)
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}/>
    </div>
  );
}

export default App;
