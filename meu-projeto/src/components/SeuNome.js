function SeuNome({ setName }) {    
    return (
        <>
            <label>Digite seu nome: </label>
            <input
                type="text"
                placeholder="Qual é seu nome"
                onChange={(e) => setName(e.target.value)}
            />
        </>
    )
}

export default SeuNome