import './styles.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMotorcycle} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
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
        <div><ul><li><b>Contact</b></li>
        45 Lone Rd <br/>
        Chicago, IL 348393<br/>
        (782)457-0909 <br/>
        Mon-Fri 11:30am -10pm<br/>
        Sat-Sun 11:30am - 12midnight
        </ul></div>
        <div><ul><li><b>Social Media Links</b></li>
        <li><FontAwesomeIcon icon={faFacebook}/></li>
        <li><FontAwesomeIcon icon={faInstagram}/></li>
        <li><FontAwesomeIcon icon={faWhatsapp}/></li>
        </ul></div>
      </footer>
    );
};

export default Footer;