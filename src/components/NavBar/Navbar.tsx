import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faHouse, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { NavbarStyled } from "./NavbarStyled";

interface NavbarProps {
  name: string | null | undefined;
}

const Navbar = ({ name }: NavbarProps): JSX.Element => {
  return (
    <nav>
      <NavbarStyled>
        <li className="profile">
          <FontAwesomeIcon className="icon-profile" icon={faCircleUser} />
          <h3>{name}</h3>
        </li>
        <li>
          <NavLink to={"/newnote"} aria-label="Nueva publicacion">
            <FontAwesomeIcon className="icon-navbar" icon={faSquarePlus} />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/home"} aria-label="Inicio">
            <FontAwesomeIcon className="icon-navbar" icon={faHouse} />
          </NavLink>
        </li>
      </NavbarStyled>
    </nav>
  );
};

export default Navbar;
