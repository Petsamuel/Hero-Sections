import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { keyboard } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/keyboard";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import img1 from "../assets/image/1.png";
import img2 from "../assets/image/2.png";
import img3 from "../assets/image/3.png";
import {
  // A11y,
  Navigation,
  // Pagination,
  // Scrollbar,
  EffectCoverflow,
  Keyboard,
  Mousewheel,
} from "swiper/modules";

export const Hero = () => {
  const Images = [img1, img2, img3];
  const Sizes =["sm", "md", "xl", "xxl"]

  return (
    <div>
      <Swiper
        modules={[Mousewheel, Navigation, EffectCoverflow, Keyboard]}
        direction={"vertical"}
        keyboard={true}
        loop={true}
        spaceBetween={0}
        speed={800}
        mousewheel={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="w-full h-screen overflow-hidden"
      >
        {Images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className={`text-white  relative flex items-center justify-center ${
                index === 0
                  ? "bg-gradient-to-b from-[#FE783D] to-[#121826]"
                  : index === 1
                  ? " bg-gradient-to-b from-[#00499D] to-[#121826]"
                  : index === 2
                  ? "bg-gradient-to-b from-[#DAB1C8] to-[#511990]"
                  : ""
              } bg-white lg:text-xl`}
            >
              <div className="info relative">
                <p className="font-semibold">CREDITS </p>
                <span>
                  {" "}
                  AI @ Maieson Mata <br /> meets innovation
                </span>
                <p>MONCLER</p>
                <span>
                  Bold, modern, <br /> and technical
                </span>
                <div className="absolute">
                  
                </div>
              </div>
              <div className="lg:mx-[8rem]">
                <img src={img} alt="img" className=" h-screen object-cover" />
              </div>
              <div className="flex space-y-8 flex-col">
                <div>
                  <p>Color:</p>
                  <span>
                    {" "}
                    {index === 0
                      ? "Blood Orange"
                      : index === 1
                      ? "Blue"
                      : "PurpleHare"}
                  </span>
                </div>

                <h3 className="font-semibold ">$1249.00</h3>
                <div className="flex w-full">
                  <input
                    type="button"
                    value=" Buy Now"
                    className={`${
                      index === 0
                        ? "bg-[#ac6e59]"
                        : index === 1
                        ? "bg-[#385c85]"
                        : "bg-[#7e53af]"
                    } w-full p-4`}
                  />

                  <input
                    type="button"
                    value="Add To Cart"
                    className={`${
                      index === 0
                        ? "bg-[#61200a]"
                        : index === 1
                        ? "bg-[#041325]"
                        : "bg-[#310b5c]"
                    } p-4 w-full`}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
