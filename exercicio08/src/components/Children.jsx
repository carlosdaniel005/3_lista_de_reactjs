import React from 'react';


const Card = ({ children }) => {
  const cardStyle = {
    border: '2px solid #ccc', 
    borderRadius: '8px',       
    padding: '16px',          
    maxWidth: '300px',        
    margin: '16px auto',       
    backgroundColor: '#fff',   
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    color:"black"
  };

  return (
    <div style={cardStyle}>
      {children} 
    </div>
  );
};

export default Card;
