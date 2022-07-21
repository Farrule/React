import './App.css';
import ListKey from './components/NumberList';

function App() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="App">
      <h1>Hello World</h1>
      <ListKey numbers={numbers} />
    </div>
  );
}

export default App;