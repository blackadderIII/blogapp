// import { useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar(){
    // const [create,setCreate] = useState(false)
    
    // const handleCreate =()=>{

    // }
   
    return(
    <nav className="navbar">
        <h1>The Saiyan Blog <i className=" fad fa-fire-flame-curved"></i> </h1>
        <div className="links">
            <Link to="/" style={{
                color:'white',
                backgroundColor:'#f1356d',
                borderRadius: '8px'
            }}>Home</Link>
            <Link to="/createBlog">New Blog</Link>
        </div>
    </nav>
   );
    
}

export default Navbar