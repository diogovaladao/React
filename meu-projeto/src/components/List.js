import Item from "./Item"

function List(){
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
             <Item marca="Lamborghini" ano_lancamento={2007}/>
        </ul>
        </>
    )
}

export default List
//<Item marca="Ferrari" ano_lancamento={2007}/> ao colocar isso dentro de ul não funciona seguindo a aula 08