import "./styles";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Container } from "./styles";

interface CarouselProps {
  images: string[];
}
const animation = { duration: 50000, easing: (t: any) => t };


export function CarouselLarge({ images }: CarouselProps) {

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    breakpoints: {
      "(max-width: 1700px)": {
        slides: { perView: 1, spacing: 5 },
        created(s) {
          s.moveToIdx(3, true, animation);
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 3, true, animation);
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 3, true, animation);
        },
      },
      
    },
  });
  return (
    <Container ref={ref} className="keen-slider">
      {images.map((src, inx) => (
        <div key={inx} className="keen-slider__slide number-slide1">
          <img
            width={"100%"}
            height={"100%"}
            src={src}
            alt="Ilustração do trabalho"
          />
        </div>
      ))}
    </Container>
  );
}
