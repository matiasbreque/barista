import { Link } from 'react-router-dom'
import React from 'react'
import CartWidget from '../Cart/CartWidget'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{width: "100%", display: "flex"}}>
        <div className="container-fluid" style={{justifyContent: "space-evenly"}}>
            <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent: "space-evenly"}}>
                <a className="navbar-brand" href="/#" style={{paddingLeft: "50"}}>
                    <strong>BaristUP</strong><br/><p>Fanáticos del café</p></a>
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorías
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">                            
                            <Link to="/category/cafe">
                                <li><a className="dropdown-item" href="#">Café</a></li>
                            </Link>
                            <Link to="/category/accesorios">
                                <li><a className="dropdown-item" href="#">Accesorios</a></li>
                            </Link>
                                <li><hr className="dropdown-divider"/></li>
                            <Link to="/">
                                <li><a className="dropdown-item" href="#">Todos los products</a></li>
                            </Link>
                        </ul>
                    </li>
                    <Link to="/cart">
                        <li className="nav-item">
                            <a className="nav-link"> Carrito <CartWidget /></a>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
        </nav>
    )
}

export default NavBar