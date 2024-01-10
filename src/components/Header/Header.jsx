import { Link } from "react-router-dom"
import "./Header.scss"


const Header = () => {
  return (
    <>
        <header>
            <div className="container header-container">
                <div className="logo">
                    <Link to={"/"}>Logo</Link>
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li>
                            <Link to={"/"}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={"/about"}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to={"/service"}>
                                Service
                            </Link>
                        </li>
                        <li>
                            <Link to={"/insight"}>
                                Insights
                            </Link>
                        </li>
                        <li>
                            <Link to={"/contact"}>
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link to={"/login"}>
                                Login
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Header