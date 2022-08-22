import Item from "./Item"

function List(){
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
             <Item marca="Lamborghini" ano_lancamento={2007}/>
             <Item marca="Ferrari" ano_lancamento={2017}/>
             <Item marca="Renault" ano_lancamento={2022}/>
        </ul>
        </>
    )
}

export default List