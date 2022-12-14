import './App.css';
import SayMayName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Fase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import SeuNome from './components/SeuNome';
import { useState } from 'react';
import Saudacao from './components/Saudacao';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';

function App() {

  const nome = "Helena"
  const meusItens = ['React', 'Vue', 'Angular']
  const [name, setName] = useState() /* Faz parte da aula 14 State Lift */

  return (
    <div className="App">
      <h1>Testando componentes</h1>
      <Frase />
      <Frase />
      <SayMayName nome="Doidão" />
      <SayMayName nome={nome} />
      <Pessoa nome="Diogo" idade="34" profissao="autônomo" foto="https://via.placeholder.com/150" />
      <p>--------------------------------------------------------------------------------------------</p>
      <h1>Minha Lista</h1>
      <List />
      <p>--------------------------------------------------------------------------------------------</p>
      <h1>Testando Eventos useState</h1>
      <Evento />
      <Form />
      <p>--------------------------------------------------------------------------------------------</p>
      <h1>Renderização Condicional</h1>
      <Condicional />
      <p>--------------------------------------------------------------------------------------------</p>
      {/* aula 13*/}
      <h1>Renderização Lista #13</h1>
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
      <p>--------------------------------------------------------------------------------------------</p>
      {/*aula 14*/}
      <h1>State Lift #14</h1>
      <SeuNome setName={setName /*componente que faz alteração */} />
      <Saudacao name={name /*componente que usa a alteração feita no anterior*/} />
      <p>--------------------------------------------------------------------------------------------</p>
      {/*aula 15*/}
      <h1>React Route #15</h1>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/empresa">Empresa</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/empresa'>
            <Empresa />
          </Route>
          <Route path='/contato'>
            <Contato />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
