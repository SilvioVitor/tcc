import './App.css';
import Header from './components/Header';
import Prompt from './components/Prompt';

function App() {
  return (
      <div className="App">
        <Header title={'Gerador de Questões'} />
        <Prompt />
      </div>
  );
}

export default App;