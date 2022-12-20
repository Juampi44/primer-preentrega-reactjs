import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/lemonslogo.png'
import { Link } from 'react-router-dom'
import './Navbar.css';
import './CartWidget';
import CartWidget from './CartWidget';


const NavBar = () => {
    return (
      <div className="nav-container">
  
          
        <header>
        <img src={Logo} className="nav-brand" />
        </header>
       
  
     
  
       {/* links de navegación */}
        <ul className="nav__link nav__link--menu">
          <li className="nav__items">
            <Link to={'/'}> Inicio</Link>
            
          </li>
          <li className="nav__items">
            <Link to={'/items'}> Catalogo</Link>
            
          </li>
          <li className="nav__items">
             <Link to={'/category/otoño'}>Otoño</Link>
              
            
          </li>
          <li className="nav__items">
            <Link to={'/category/verano'}>Verano</Link>
              
            
          </li>
          <li className="nav__items">
          <Link to={'/category/invierno'}> Invierno</Link>
            
              
            
          </li>
        </ul>
       
  
        <div className="dropdown dropdown-end">
          <label tabindex="0" className="btn btn-ghost btn-circle" >
          <div className="indicator">
           
            <span className="badge badge-sm indicator-item">5</span>
  
          </div>
          </label>
        </div>
      </div>
    );
  };

// const NavBar = () => {
//     return <div className="navbar-container">
//         <h2>Tienda Superbike</h2>
//             <button className="buttons-navbar">Modelos</button>
//             <button className="buttons-navbar">indumentaria</button>
//             <button className="buttons-navbar">contacto</button>
//             <CartWidget/>
//     </div>;
    
// };

export default NavBar;