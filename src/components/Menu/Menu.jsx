import { Link } from "react-router-dom";
import "./menu.styles.css";

const Menu = () => {
  return (
    <>
      <ul className="ul-menu">
        <li className="li-menu">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="li-menu">
          <Link className="link" to="/lista">
            Lista de Tarefas
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
