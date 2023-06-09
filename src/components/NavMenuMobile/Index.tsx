import { MenuMobile } from "./styles";

import IconClose from "../../assets/icons/icon-close.svg";
import { useEffect } from "react";

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
        <a href="/">
          <h1
            onClick={() => setMenuIsVisible(false)}
            style={{ letterSpacing: 6, color: "white" }}
          >
            Katia Manicure
          </h1>
        </a>
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
            <a href="/About">Sobre</a>
          </li>
          <li onClick={() => setMenuIsVisible(false)}>
            <a href="/Works">Trabalhos</a>
          </li>
          <li onClick={() => setMenuIsVisible(false)}>
            <a href="/Contact">Contato</a>
          </li>
        </ul>
      </nav>
    </MenuMobile>
  );
}
