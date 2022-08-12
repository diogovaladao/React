import './App.css';
import SayMayName from './components/SayMyName';
import Pessoa from './Pessoa';

function App() {

  const nome = "Helena"

  return (
    <div className="App">
      <SayMayName nome="Doidão" />
      <SayMayName nome={nome} />
      <Pessoa nome="Diogo" idade="34" profissao="autônomo" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
