import {useState} from 'react'


const Home = () => {

    // let name = 'SKOB'
     const[name,setName] = useState('SKOB')

    const handleClick = ()=>{
       setName('Goku')
       console.log(name)
    }


    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
 
export default Home;