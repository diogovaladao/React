import './App.css';
import SayMayName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Fase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

  const nome = "Helena"

  return (
    <div className="App">
      <h1>Testando componentes</h1>
      <Frase/>
      <Frase/>
      <SayMayName nome="Doidão" />
      <SayMayName nome={nome} />
      <Pessoa nome="Diogo" idade="34" profissao="autônomo" foto="https://via.placeholder.com/150"/>
      <List/>
      <p>--------------------------------------------------------------------------------------------</p>
      <h1>Testando Eventos</h1>
      <Evento/>
      <Form/>
    </div>
  );
}

export default App;
