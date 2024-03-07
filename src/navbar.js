function Navbar(){
   return(
    <nav className="navbar">
        <h1>The Saiyan Blog </h1>
        <div className="links">
            <a href="/" style={{
                color:'white',
                backgroundColor:'#f1356d',
                borderRadius: '8px'
            }}>Home</a>
            <a href="/create">New Blog</a>
        </div>
    </nav>
   );
    
}

export default Navbar