import { ReactNode } from "react";
import { Swiper } from "swiper/react";
import { SwiperModule } from "swiper/types";
import "swiper/swiper-bundle.css";

type TCoverflowEffect = {
  rotate: number;
  stretch: number;
  depth: number;
  modifier: number;
  slideShadows: boolean;
};

type TAutoPlay = {
  delay: number
  disableOnInteraction: boolean
}

type TSwiperProps = {
  children?: ReactNode;
  spaceBetween?: number;
  slidesPerView?: number;
  onSlideChange?: () => void;
  onSwiper?: () => void;
  centeredSlides?: boolean;
  modules?: SwiperModule[];
  loop?: boolean;
  autoplay?: TAutoPlay
  effect?: string;
  pagination?: boolean;
  coverflowEffect?: TCoverflowEffect;
};
const SwiperComponents = (props: TSwiperProps) => {
  const {
    children,
    centeredSlides,
    spaceBetween,
    modules,
    loop,
    slidesPerView,
    coverflowEffect,
    effect,
    pagination,
    autoplay
  } = props;
  return (
    <Swiper
      effect={effect}
      pagination={pagination}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      centeredSlides={centeredSlides}
      loop={loop}
      modules={modules}
      coverflowEffect={coverflowEffect}
      autoplay={autoplay}
    >
      {children}
    </Swiper>
  );
};

export default SwiperComponents;
