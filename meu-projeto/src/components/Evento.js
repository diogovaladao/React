import Button from "./Button"

function Evento() {

    function meuEvento() {
        console.log("Evento chamado pelo componente filho!")
    }

    function segundoEvento() {
        console.log("Segundo evento chamado pelo componente filho")
    }

    function meuEvento2() {
        console.log("Evento chamado pelo próprio componente")
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
            <button onClick={meuEvento2}>Ativar</button>
        </div>
    )
}

export default Evento