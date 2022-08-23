import { useState } from 'react'

function Condicional() {

    const[email, setEmail] = useState()
    const[useremail, setUserEmail] = useState()
    
    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(){
        setUserEmail('')
    }

    return (
        <>
            <h2>Cadastre seu email:</h2>
            <form>
                <input  onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Digite seu email..."></input>
                <button type='submit' onClick={ enviarEmail }>Enviar e-mail</button>
            </form>
            {useremail &&(
                <div>
                    <h3>O e-mail do usuário é: {useremail}</h3>
                    <button onClick={limparEmail}>Limpar e-mail</button>
                </div>
            )}
        </>
    )
}

export default Condicional