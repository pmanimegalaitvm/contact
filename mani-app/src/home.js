import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div>

            <center><Link to={'/cr'}><button>create</button></Link>
            <Link to={'/re'}><button>read</button></Link></center>

        </div>
    )
}