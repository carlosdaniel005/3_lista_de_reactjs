function Comp(props){

var X = props.isVisible;

return(
    <>
        {X == true ? (<><p>
            A astronomia é uma das ciências mais antigas e fascinantes, dedicada ao estudo dos corpos celestes e dos fenômenos que ocorrem no universo. Desde a observação das estrelas a olho nu até o uso de telescópios espaciais sofisticados, a humanidade sempre procurou entender a vastidão do cosmos e o nosso lugar nele. Através dessa ciência, descobrimos não apenas os planetas e as galáxias, mas também as origens do universo, como o Big Bang, e as leis físicas que governam a matéria e a energia em escalas imensas. Cada nova descoberta, como buracos negros, exoplanetas ou ondas gravitacionais, desafia nossa compreensão e nos leva a questionar o infinito, revelando a complexidade e a beleza do universo que nos cerca.</p></>): (<></>)}
    </>
)



}

export default Comp;