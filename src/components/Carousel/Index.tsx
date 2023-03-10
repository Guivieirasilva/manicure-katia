import { Container } from "./styles";
import { useKeenSlider } from "keen-slider/react";

interface CarouselProps {
  images: string[];
}
const animation = { duration: 50000, easing: (t: any) => t };

export function Carousel({ images }: CarouselProps) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    breakpoints: {
      "(min-width: 300px)": {
        slides: { perView: 1, spacing: 5 },
        created(s) {
          s.moveToIdx(8, true, animation);
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 8, true, animation);
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 8, true, animation);
        },
      },
      "(min-width: 660px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
        created(s) {
          s.moveToIdx(4, true, animation);
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 4, true, animation);
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 4, true, animation);
        },
      },
    },
    slides: {
      perView: 3,
      spacing: 20,
    },
    renderMode: "performance",
  });
  return (
    <Container ref={ref} className="keen-slider">
      <div className="keen-slider__slide number-slide">
        <img
          width={"100%"}
          height={"100%"}
          src={images[0]}
          alt="Ilustração do trabalho"
        />
      </div>
      <div className="keen-slider__slide number-slide">
        <img
          width={"100%"}
          height={"100%"}
          src={images[1]}
          alt="Ilustração do trabalho"
        />
      </div>
      <div className="keen-slider__slide number-slide">
        <img
          width={"100%"}
          height={"100%"}
          src={images[2]}
          alt="Ilustração do trabalho"
        />
      </div>
      <div className="keen-slider__slide number-slide">
        <img
          width={"100%"}
          height={"100%"}
          src={images[3]}
          alt="Ilustração do trabalho"
        />
      </div>
      <div className="keen-slider__slide number-slide">
        <img
          width={"100%"}
          height={"100%"}
          src={images[4]}
          alt="Ilustração do trabalho"
        />
      </div>
      <div className="keen-slider__slide number-slide">
        <img
          width={"100%"}
          height={"100%"}
          src={images[5]}
          alt="Ilustração do trabalho"
        />
      </div>
    </Container>
  );
}
