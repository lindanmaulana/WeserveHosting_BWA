import { SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperComponents from "../../swiper/SwiperComponents";
import { assets } from "../../../assets/images";

interface IDataSwiper {
  id: number | string;
  titleButton: string;
  url: string;
}

const OurShowCase = () => {
  const dataSwiper: IDataSwiper[] = [
    {
      id: 1,
      titleButton: "View Details",
      url: assets.img1,
    },
    {
      id: 2,
      titleButton: "View Details",
      url: assets.img2,
    },
    {
      id: 3,
      titleButton: "View Details",
      url: assets.img3,
    },
    {
      id: 4,
      titleButton: "View Details",
      url: assets.img4,
    },
  ];

  return (
    <section className="py-[50px]">
      <div className="container max-w-6xl">
        <h2 className="text-center text-[46px] font-semibold text-primary mb-[10px]">
          Our Showcase
        </h2>
        <p className="text-center text-base font-medium text-[#5D5D7C] mb-[30px]">
          They built amazing website to help more people around the world <br />
          by using our recommendation services and products
        </p>
        <SwiperComponents
          slidesPerView={3}
          spaceBetween={1}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          modules={[Pagination, Autoplay, Navigation]}
          centeredSlides={true}
        >
          {dataSwiper.map((res) => (
            <SwiperSlide key={res.id}>
              <div className="relative flex justify-center group ">
                <img
                  src={res.url}
                  alt=""
                  className=" h-[220px] w-[320px] rounded-2xl border-transparent transition-global  border-4 group-hover:border-secondary"
                />
                <button className="absolute bottom-10 opacity-0 group-hover:opacity-100 transition-global px-[30px] py-[10px] bg-secondary rounded-full text-base font-semibold text-third">
                  {res.titleButton}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </SwiperComponents>
      </div>
    </section>
  );
};

export default OurShowCase;
