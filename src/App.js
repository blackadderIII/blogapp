import logo from './logo.svg';
import './App.css';
import './all.css';
import './navtoggle.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome To New Genesis.
          <br/>  CHAPTER 1
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
        {/* <div className="nav active" id='nav'>
          <a href="1"><i className="fa-game-console-handheld"></i><h4>PS4</h4></a>
          <a href="1"><i className="fa fa-galaxy"></i><h4>XBOX</h4></a>
          <a href="1"><i className="fa-game-console-handheld"></i><h4>PS5</h4></a>
        </div>  */}
    </div>
  );
}

export default App;
