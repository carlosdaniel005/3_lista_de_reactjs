import React from 'react';
import ImageGallery from './components/Objeto';

const App = () => {
  const images = [
    { url: 'https://i.pinimg.com/736x/40/76/79/407679d20088c659aba7a760c69dd7c3.jpg', altText: 'Panthera Cor de Rosa' },
    { url: 'https://i.pinimg.com/736x/5d/f4/18/5df418287735c4bc97bc8e4100d0a451.jpg', altText: 'Ghost' },
    { url: 'https://i.pinimg.com/736x/eb/38/75/eb3875fb5cab1f7933d5c96fd2b0757c.jpg', altText: 'Alien' },
  ];

  return (
    <div>
      <h1>Galeria de Imagens</h1>
      <ImageGallery images={images} />
    </div>
  );
};

export default App;
