import './App.css';
import SayMayName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Fase';
import List from './components/List';

function App() {

  const nome = "Helena"

  return (
    <div className="App">
      <Frase/>
      <Frase/>
      <SayMayName nome="Doidão" />
      <SayMayName nome={nome} />
      <Pessoa nome="Diogo" idade="34" profissao="autônomo" foto="https://via.placeholder.com/150"/>
      <List/>
    </div>
  );
}

export default App;
