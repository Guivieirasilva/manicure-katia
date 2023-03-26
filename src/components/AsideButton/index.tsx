import Chat from "../../assets/chat.png";
import { Asise } from "./styles";
const linkWhatsapp = "https://www.whatsapp.com/";

export function AsideButton() {
  return (
    <Asise>
      <div>
        <a href={linkWhatsapp} target="_blank">
          <img src={Chat} alt="balão de chat" />
        </a>
      </div>
    </Asise>
  );
}
