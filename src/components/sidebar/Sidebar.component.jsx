import "./Sidebar.component.scss";
import { Link, NavLink } from "react-router-dom";
import LogoH from "../../assets/images/logo.png";
import LogoHarsh from "../../assets/images/harsh-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoH} alt="Logo" />
        <img className="sub-logo" src={LogoHarsh} alt="Slobodan" />
      </Link>

      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/harsh-jadon-095a92205"
            target="blank"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#0e76a8" />
          </a>
        </li>
        <li>
          <a href="https://github.com/jadonharsh109" target="blank">
            <FontAwesomeIcon icon={faGithub} color="#171515" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/harshhhhhhh_____/" target="blank">
            <FontAwesomeIcon icon={faInstagram} color="light-pink" />
          </a>
        </li>
        <li>
          <a href="https://discord.gg/WmHVE7Qv8M" target="blank">
            <FontAwesomeIcon icon={faDiscord} color="#7289da" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
