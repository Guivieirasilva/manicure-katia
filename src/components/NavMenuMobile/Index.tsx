import { MenuMobile } from "./styles";

import IconClose from "../../assets/icons/icon-close.svg";
import { useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {
  menuIsVisible: any;
  setMenuIsVisible: any;
}

export function NavMenuMobile({ menuIsVisible, setMenuIsVisible }: Props) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);

  return (
    <MenuMobile isVisible={menuIsVisible}>
      <div className="mobile">
        <Link to="/">
          <h1
            onClick={() => setMenuIsVisible(false)}
            style={{ letterSpacing: 6, color: "white" }}
          >
            Katia Manicure
          </h1>
        </Link>
        <button className="button" onClick={() => setMenuIsVisible(false)}>
          <img
            src={IconClose}
            alt="Icone de X para fechamento do menu mobile"
          />
        </button>
      </div>
      <nav className="navMobile">
        <ul>
          <li onClick={() => setMenuIsVisible(false)}>
            <Link to="/About">Sobre</Link>
          </li>
          <li onClick={() => setMenuIsVisible(false)}>
            <Link to="/Works">Trabalhos</Link>
          </li>
          <li onClick={() => setMenuIsVisible(false)}>
            <Link to="/Contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </MenuMobile>
  );
}
