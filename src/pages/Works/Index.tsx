import { CarouselLarge } from "../../components/CarouselLarge/Index";

import ambiente1 from "../../assets/ambiente1.jpg"
import ambiente2 from "../../assets/ambiente2.jpg"

const images = [ambiente1,ambiente2,ambiente2,ambiente1] 

export default function Works() {
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'black'
        

      }}
    >
      <CarouselLarge images={images} />
    </div>
  );
}
