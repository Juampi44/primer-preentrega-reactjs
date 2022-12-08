import './Navbar.css';
import './CartWidget';
import CartWidget from './CartWidget';



const NavBar = () => {
    return <div className="navbar-container">
        <h2>Tienda Superbike</h2>
            <button className="buttons-navbar">Modelos</button>
            <button className="buttons-navbar">indumentaria</button>
            <button className="buttons-navbar">contacto</button>
            <CartWidget/>
    </div>;
    
};

export default NavBar;