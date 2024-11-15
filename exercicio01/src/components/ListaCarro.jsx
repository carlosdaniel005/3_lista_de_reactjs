

function Texto(props){
    return(
        <li>This is {props.country}</li>
    )
}

function Country(){
    const globo = [
        {id: 1, country: 'Mexico'},
        {id: 1, country: 'Itália'},
        {id: 1, country: 'Canada'},
        {id: 1, country: 'USA'},
        {id: 1, country: 'Japão'},
    ]

    return(
        <>
            <h1>Os países são:</h1>
            <ul>{globo.map((globo) => <Texto key={globo.id} country={globo.country}/>)}</ul>
        </>
    )
}

export default Country