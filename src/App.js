import "./all.css";
import Navbar from './navbar';
import Home from "./home";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import CreateBlog from "./Create";
import BlogDetails from "./BlogDetails";
import Notfound from "./Notfound";

function App() {
  

  return (
    <Router>
    <div className="App">
    <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/createBlog' component={CreateBlog} />
          <Route exact path='/blogs/:id' component={BlogDetails} />
          <Route exact path='*' component={Notfound} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
