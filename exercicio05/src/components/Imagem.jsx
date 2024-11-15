
const ImageGallery = ({ imageUrls }) => {
    return (
      <div>
        {imageUrls.map((url, index) => ( url ? (<img key={index} src={url} alt={`Imagem ${index}`} style={{ width: '100px', margin: '10px', height: '200px' }} />) : null ))}
      </div>
    );
  };
  
  export default ImageGallery;



























/*function Imagem(){
    const imageList = [
        'https://br.pinterest.com/pin/244601823505350352/',
        'https://br.pinterest.com/pin/8373949301455205/',
        'https://br.pinterest.com/pin/3799980927937617/',
        'https://br.pinterest.com/pin/1970393581783026/',
        'https://br.pinterest.com/pin/18366310974969044/'
    ];

    return(
        <>
            <h1>Galeria de Imagens</h1>

            {imageUrls.map((url, index) => (
        url ? ( // Verifica se a URL não está vazia
          <img key={index} src={url} alt={`Imagem ${index}`} style={{ maxWidth: '100%', margin: '10px' }} />
        ) : null // Não renderiza nada se a URL estiver vazia
      ))}
            
        </>
    );
}

export default Imagem;

*/