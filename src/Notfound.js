import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Notfound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>This Page Does Not Exist. Please Return to the Homepage.</p>
            <Link to="/">Back To HomePage</Link>
        </div>
     );
}
 
export default Notfound;