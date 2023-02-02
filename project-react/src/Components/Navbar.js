import {Link} from 'react-router-dom';

function Navbar() {
    return <nav className="nav">
        <Link to="/" className="pixelPurple">Pixel Purple</Link>
        <ul>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
}

export default Navbar