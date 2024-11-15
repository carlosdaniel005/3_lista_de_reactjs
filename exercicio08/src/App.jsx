import React from 'react';
import Card from './components/Children';

const App = () => {
  return (
    <div>
      <h1>Aplicação de Cards</h1>

      <Card>
        <h2>Porsche</h2>
        <h2>Saint Laurent</h2>
      </Card>

      <Card>
        <img src="https://i.pinimg.com/736x/40/76/79/407679d20088c659aba7a760c69dd7c3.jpg" width='300px'   alt="Imagem do Card" />
      </Card>

      <Card>
        <button onClick={() => alert('Botão clicado!')}>Clique aqui</button>
      </Card>
    </div>
  );
};

export default App;
