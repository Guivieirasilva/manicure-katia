import { MenuMobile } from "./styles";

import IconClose from "../../assets/icon-close.svg";
import { useEffect } from "react";
import { BubblyLink } from "react-bubbly-transitions";

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
        <BubblyLink to="/">
          <h1
            onClick={() => setMenuIsVisible(false)}
            style={{ letterSpacing: 6, color: "white" }}
          >
            Katia Manicure
          </h1>
        </BubblyLink>
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
            <BubblyLink to="/About">Sobre</BubblyLink>
          </li>
          <li onClick={() => setMenuIsVisible(false)}>
            <BubblyLink to="/Works">Trabalhos</BubblyLink>
          </li>
          <li onClick={() => setMenuIsVisible(false)}>
            <BubblyLink to="/Contact">Contato</BubblyLink>
          </li>
        </ul>
      </nav>
    </MenuMobile>
  );
}
