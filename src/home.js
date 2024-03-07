import {useState} from 'react'


const Home = () => {

    // let name = 'SKOB'
     const[name,setName] = useState('SKOB')
     const[age, setage]= useState('35')

    const handleClick = ()=>{
       setName('Goku') 
        setage(50)

    }


    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
 
export default Home;