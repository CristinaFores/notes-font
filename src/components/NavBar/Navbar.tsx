import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { NavbarStyled } from "./NavbarStyled";

interface NavbarProps {
  name: string | null | undefined;
}

const Navbar = ({ name }: NavbarProps): JSX.Element => {
  return (
    <nav>
      <NavbarStyled>
        <li className="profile">
          <FontAwesomeIcon icon={faCircleUser} />
          <h3>{name}</h3>
        </li>
        <li>
          <NavLink
            to={"/newnote"}
            aria-label="Nueva publicacion"
            className="icon-navbar"
          >
            New Task
          </NavLink>
        </li>
        <li>
          <NavLink to={"/home"} aria-label="Inicio" className="icon-navbar">
            Home
          </NavLink>
        </li>
      </NavbarStyled>
    </nav>
  );
};

export default Navbar;
