import './styles.css';
import {Link} from 'react-router-dom';
function Footer() {
    return (
      <footer>
        <div><img src="home icon.svg" alt="nothing"/></div>
        <div>
          <ul>
          <li><b>Navigation</b></li>
            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to="/" className="nav-item">About</Link></li>
            <li><Link to="/" className="nav-item">Menu</Link></li>
            <li><Link to="/booking" className="nav-item">Reservations</Link></li>
            <li><Link to="/" className="nav-item">Order Online</Link></li>
            <li><Link to="/" className="nav-item">Login</Link></li>
            </ul>
        </div>
        <div><ul><li><b>Contact</b></li></ul></div>
        <div><ul><li><b>Social Media Links</b></li></ul></div>
      </footer>
    );
};

export default Footer;