import { NavLink } from 'react-router-dom';
import '../Home.css';

const Header = () => {
    return (
    <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/contact">Contacts</NavLink></li>
        </ul>
    </nav>
    )
}

export default Header
