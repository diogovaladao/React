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