
const DynamicParagraph = ({ isHighlighted, text }) => {
  const paragraphStyle = {
    color: isHighlighted ? 'blueviolet' : 'green',
    fontSize: '16px',  
    fontWeight: isHighlighted ? 'bold' : 'normal' 
  };

  return <p style={paragraphStyle}>{text}</p>;
};

export default DynamicParagraph;
