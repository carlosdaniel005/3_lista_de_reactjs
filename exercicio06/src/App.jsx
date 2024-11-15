import React, { useState } from 'react';
import DynamicParagraph from './components/Paragrafo';

const App = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <div>
      <h1>Alterar Estilo do Parágrafo</h1>
      
      <DynamicParagraph
        isHighlighted={isHighlighted}
        text="Este parágrafo terá estilo dinâmico!"
      />
      <button onClick={() => setIsHighlighted(!isHighlighted)}>
        {isHighlighted ? 'Remover Destaque' : 'Destacar Texto'}
      </button>
    </div>
  );
};

export default App;
