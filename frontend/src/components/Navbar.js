import { Link } from "react-router-dom";


const Navbar = () => {

    return(
        <header>
            <div className = "container">
                <Link to = "/components/innerPages/ContentPage">
                    <h1>Welcome</h1>
                </Link>
            </div>
            <nav>
                <div>
                    <button href={`/components/innerPages/LoginPage`}>Logout</button>
                </div>
            </nav>
        </header>
    )
}