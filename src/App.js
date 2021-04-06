import logo from './logo.svg'; //Importowanie logo
import './App.css'; //Import css

function App() { //Funkcja zwracająca blok HTML w postaci DIVA
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello. My name is Paweł
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
