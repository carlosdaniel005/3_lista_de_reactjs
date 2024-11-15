

const Fragment = () => {
  const items = ['Porsche', 'Camaro', 'Golf GTI']; // Array de itens

  return (
    <>
      <h1>Lista de Carros</h1>
      <>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li> // Cada item é renderizado como <li>
          ))}
        </ul>
      </>
    </>
  );
};

export default Fragment;
