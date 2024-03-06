
import './App.css';
import './all.css';
import './navtoggle.js';

function App() {
const title ='Welcome To New Genesis';
const likes = 50;
// const person ={ name:'yoshi',age:'50'};

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        {/* <p>{person}</p> */}
      </div>
        {/* <div className="nav active" id='nav'>
          <a href="1"><i className="fa-game-console-handheld"></i><h4>PS4</h4></a>
          <a href="1"><i className="fa fa-galaxy"></i><h4>XBOX</h4></a>
          <a href="1"><i className="fa-game-console-handheld"></i><h4>PS5</h4></a>
        </div>  */}
    </div>
  );
}

export default App;
