

function Evento() {

    function meuEvento() {
        console.log("O evento foi disparado!")
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Me clique</button>
        </div>
    )
}

export default Evento