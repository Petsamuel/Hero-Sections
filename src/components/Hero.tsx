import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { keyboard } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/keyboard";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
// import "swiper/css/scrollbar";
import img1 from "../assets/image/1.png";
import img2 from "../assets/image/2.png";
import img3 from "../assets/image/3.png";
import img5 from "../assets/image/5.png";
import {
  Navigation,
  EffectCoverflow,
  Keyboard,
  Mousewheel,
  Thumbs,
} from "swiper/modules";
import { useState, useRef } from "react";
import { Swiper as SwiperInstance } from "swiper";

export const Hero = () => {
  const Images = [img1, img2, img3, img5];
  const Social = ["TW", "IN", "GH", "FB"];
  const [Active, setActive] = useState(0);
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [thumbSwiper, setThumbSwiper] = useState<SwiperInstance | null>(null);
  console.log("test:", thumbSwiper);
  return (
    <div>
      <Swiper
        modules={[Mousewheel, Navigation, EffectCoverflow, Keyboard, Thumbs]}
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
        thumbs={{ swiper: thumbSwiper }}
        slidesPerView={1}
        navigation={{
          nextEl: "",
          prevEl: "",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={setThumbSwiper}
        className="w-full h-screen overflow-hidden"
      >
        {Images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className={`text-white  relative flex lg:flex-row flex-col items-center justify-center ${
                index === 0
                  ? "bg-gradient-to-b from-[#FE783D] to-[#121826]"
                  : index === 1
                  ? " bg-gradient-to-b from-[#00499D] to-[#121826]"
                  : index === 2
                  ? "bg-gradient-to-b from-[#DAB1C8] to-[#511990]"
                  : "bg-gradient-to-b from-[#d9c5bf] to-[#0b273f]"
              } bg-white lg:text-xl w-full`}
            >
              <div className="info lg:relative flex flex-col gap-1 absolute lg:top-0 top-[40dvh]  z-20">
                {/* page navigation */}
                <div className="absolute text-[5.1rem] top-[4.5rem] start-[-23rem] rotate-90 flex gap-8 z-20">
                  {["o", "o", "o", "o"].map((val: string, index: number) => (
                    <div
                      key={index}
                      className="font-['ozda'] tracking-[1rem] cursor-pointer "
                      onClick={() => {
                        setActive(index);
                        const swiper = thumbSwiper;
                        if (swiper) {
                          swiper.slideTo(index);
                        }
                        if (swiperRef.current) {
                          swiperRef.current.slideTo(index);
                        }
                      }}
                    >
                      <p
                        className={`${
                          index === Active ? "hover:shadow-2xl" : ""
                        }`}
                      >
                        {val}
                      </p>
                    </div>
                  ))}
                </div>
                {/* brand name */}
                <div className="absolute text-[5.1rem] lg:top-[8rem] top-[5rem] rotate-90 start-[-24rem] font-['ozda'] tracking-[1rem] font-extrabold">
                  POSSESSD
                </div>
                <p className="font-extrabold lg:text-2xl md:text-lg z-20 w-[20rem]">
                  {index === 0
                    ? "Elevate Your Style Game."
                    : index === 1
                    ? "Master the Art of Adventure."
                    : "Redefine Modern Sophistication."}
                </p>

                <p>
                  Where innovation meets <br /> technical perfection.
                </p>

                <br />
                <p className="z-20">
                  Bold, modern, <br /> and technical
                </p>
                <div className="absolute text-sm bottom-[-30dvh] flex gap-4">
                  {Social.map((val, index) => (
                    <div key={index} className="flex gap-4 z-20">
                      <div className="cursor-pointer hover:underline-offset-8">
                        {val}
                      </div>
                    </div>
                  ))}
                </div>

                <span className="absolute  h-full w-full inset-0  [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center" />
              </div>

              <div className="lg:mx-[5rem] relative text-center lg:z-20">
                <img
                  src={img}
                  alt="img"
                  className="h-screen object-cover lg:z-10 w-full"
                />
                {/* thumbnail swiper */}
                <div className="absolute bottom-[8.5rem] w-[16rem] end-[-2.8em]">
                  {" "}
                  <Swiper
                    modules={[Thumbs]}
                    onSwiper={(swiper) => setThumbSwiper(swiper)}
                    spaceBetween={0}
                    slidesPerView={2}
                    watchSlidesProgress={true}
                    slideToClickedSlide={true}
                    speed={800}
                    loop={true}
                    className="flex"
                  >
                    {Images.map((val, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={val}
                          alt={`thumbs${index + 1}`}
                          className={`w-[8rem] h-[4rem] ${
                            index === 0
                              ? "bg-gradient-to-b from-[#FE783D] to-[#121826]"
                              : index === 1
                              ? " bg-gradient-to-b from-[#00499D] to-[#121826]"
                              : index === 2
                              ? "bg-gradient-to-b from-[#DAB1C8] to-[#511990]"
                              : "bg-gradient-to-b from-[#d9c5bf] to-[#0b273f]"
                          } object-contain`}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div className="flex space-y-8 flex-col z-10">
                <div>
                  <p>Color:</p>
                  <span>
                    {" "}
                    {index === 0
                      ? "Blood Orange"
                      : index === 1
                      ? "Blue"
                      : index === 2
                      ? "PurpleHare"
                      : "Marshmello Pink"}
                  </span>
                </div>

                <h3 className="font-semibold z-10">$1249.00</h3>
                <div className="flex w-full z-10">
                  <input
                    type="button"
                    value=" Buy Now"
                    className={`${
                      index === 0
                        ? "bg-[#ac6e59]"
                        : index === 1
                        ? "bg-[#385c85]"
                        : index === 2
                        ? "bg-[#7e53af]"
                        : "bg-[#ca7683]"
                    } w-full p-4 cursor-pointer`}
                  />

                  <input
                    type="button"
                    value="Add To Cart"
                    className={`${
                      index === 0
                        ? "bg-[#61200a]"
                        : index === 1
                        ? "bg-[#041325]"
                        : index === 2
                        ? "bg-[#310b5c]"
                        : "bg-[#562330]"
                    } p-4 w-full cursor-pointer`}
                  />
                </div>
                <div className="absolute text-sm bottom-[6dvh] end-[8rem] ">
                  <p className="cursor-pointer hover:underline underline-offset-8">
                    Privacy
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
