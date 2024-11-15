import './Dad.css';

function Dad(props){
return(
    <>
        <div className="card">
            <h1 className="son">{props.son}</h1>
        </div>
    </>
)
}

export default Dad;