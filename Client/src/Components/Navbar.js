import "./Navbar.css";
export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={require('../Images/wcoe.jpg')} alt="logo" className="nav-logo"/>
            <p className="nav-heading">Walchand College of Engineering, Sangli</p>
        </nav>
    )
}