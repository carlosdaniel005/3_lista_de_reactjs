import React from 'react';
import Imagem from './components/Imagem';

const App = () => {
  const imageUrls = [
    'https://i.pinimg.com/736x/57/af/6d/57af6d80caab29d81466a5710bafcf07.jpg',
    'https://i.pinimg.com/736x/38/d5/9b/38d59be5f33159c01af1b3d7365f37c9.jpg', // Esta URL será ignorada
    'https://i.pinimg.com/736x/80/3f/95/803f957aa77199e56aa75baa0f1f39e7.jpg',
    'https://i.pinimg.com/736x/c3/d5/57/c3d557ea447c6bf4b40c3f6c68c0d24d.jpg',
    'https://i.pinimg.com/736x/a6/f1/81/a6f181466e393ff073c55bb314bb5a91.jpg'
  ];

  return (
    <div>
      <h1>Galeria de Imagens</h1>
      <Imagem imageUrls={imageUrls} />
    </div>
  );
};

export default App;
