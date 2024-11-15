import './Lista.css';

    function Lista(){
        const list = [
            { id: 1, name: 'John', age: 25 },
            { id: 2, name: 'Johny', age: 35 },
            { id: 3, name: 'Apollo', age: 20 },
            { id: 4, name: 'Philiphe', age: 25 },
            { id: 5, name: 'Peter', age: 18 },
        ]

        return(
            <>
              <h1>Tabela de Nomes</h1>
              <table border="1">
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Age</td>
                </tr>
                <tr>
                    <td>{list[0].id}</td>
                    <td>{list[0].name}</td>
                    <td>{list[0].age}</td>
                </tr>
                <tr>
                    <td>{list[1].id}</td>
                    <td>{list[1].name}</td>
                    <td>{list[1].age}</td>
                </tr>
                <tr>
                    <td>{list[2].id}</td>
                    <td>{list[2].name}</td>
                    <td>{list[2].age}</td>
                </tr>
                <tr>
                    <td>{list[3].id}</td>
                    <td>{list[3].name}</td>
                    <td>{list[3].age}</td>
                </tr>
                <tr>
                    <td>{list[4].id}</td>
                    <td>{list[4].name}</td>
                    <td>{list[4].age}</td>
                </tr>
              </table>
            </>
        )
    }

export default Lista;