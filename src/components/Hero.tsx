import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { keyboard } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/keyboard";
import "swiper/css/pagination";
import "swiper/css/thumbs";
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
import { useEffect, useState } from "react";
import { Swiper as SwiperInstance } from "swiper";
import { BoxReveal } from "./Reveal";

export const Hero = () => {
  const Images = [img1, img2, img3, img5];
  const Socials = [
    { name: "TW", link: "https://twitter.com/bieefilled" },
    { name: "IN", link: "https://linkedin.com/in/bieefilled" },
    { name: "GH", link: "https://github.com/petsamuel" },
    { name: "FB", link: "#" },
  ];
  const [Active, setActive] = useState(0);
  const [thumbSwiper, setThumbSwiper] = useState<SwiperInstance | null>(null);
  console.log(thumbSwiper?.activeIndex);

  useEffect(() => {}, [Active]);

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
        onSwiper={(swiper) => console.log(swiper.activeIndex)}
        className="w-full h-screen overflow-hidden relative"
      >
        {Images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className={`text-white ${
                index === 0
                  ? "bg-gradient-to-b from-[#FE783D] to-[#121826]"
                  : index === 1
                  ? " bg-gradient-to-b from-[#00499D] to-[#121826]"
                  : index === 2
                  ? "bg-gradient-to-b from-[#DAB1C8] to-[#511990]"
                  : "bg-gradient-to-b from-[#d9c5bf] to-[#0b273f]"
              } bg-white lg:text-xl`}
            >
              <div className="relative overflow-hidden h-screen w-screen">
                {/* wrapper */}
                <div className="flex relative lg:flex-row flex-col items-center justify-center lg:ml-[12rem] ml-[6.5rem] lg:w-fit w-screen p-4">
                  <div
                    className={` lg:relative flex flex-col gap-1 absolute lg:top-0 top-[20dvh]  z-20 w-full items-start mt-[3rem] lg:mt-0 `}
                  >
                    <div
                      className={`absolute rotate-90 lg:flex gap-16 z-20  start-[-25rem] top-[10dvh] text-white font-['ozda'] text-[5rem] hidden `}
                    >
                      {["o", "o", "o", "o"].map(
                        (val: string, index: number) => (
                          <div
                            key={index}
                            className="font-['ozda'] tracking-[1rem] cursor-pointer"
                            onClick={() => {
                              const slideResult = thumbSwiper?.slideTo(index);
                              if (slideResult !== undefined) {
                                setActive(index);
                              }
                            }}
                          >
                            <p
                              className={`${
                                thumbSwiper?.activeIndex === index
                                  ? "text-white"
                                  : "text-[#ffff]"
                              }`}
                            >
                              {val}
                            </p>
                          </div>
                        )
                      )}
                    </div>

                    {/* brand name */}
                    <div className="absolute text-[5.1rem] lg:md:top-[8rem] top-[10rem] rotate-90 start-[-24rem] font-['ozda'] tracking-[1rem] font-extrabold">
                      POSSESSD
                    </div>
                    <BoxReveal
                      boxColor={
                        index === 0
                          ? "ac6e59"
                          : index === 1
                          ? "#385c85"
                          : index === 2
                          ? "#7e53af"
                          : "#ca7683"
                      }
                      duration={0.5}
                    >
                      <p className="font-extrabold lg:text-4xl text-xl z-20 lg:w-[20rem] w-[15rem] text-pretty">
                        {index === 0
                          ? "Elevate Your Style Game."
                          : index === 1
                          ? "Master the Art of Adventure."
                          : "Redefine Modern Sophistication."}
                      </p>
                    </BoxReveal>

                    <div className="z-20  lg:block lg:text-lg text-sm">
                      <BoxReveal
                        duration={0.5}
                        boxColor={
                          index === 0
                            ? "#61200a"
                            : index === 1
                            ? "#041325"
                            : index === 2
                            ? "#310b5c"
                            : "#562330"
                        }
                      >
                        <p>
                          Where innovation meets <br /> technical perfection.
                        </p>
                      </BoxReveal>

                      <br />
                      <BoxReveal
                        duration={0.5}
                        boxColor={
                          index === 0
                            ? "#61200a"
                            : index === 1
                            ? "#041325"
                            : index === 2
                            ? "#310b5c"
                            : "#562330"
                        }
                      >
                        <p className="text-sm">
                          Bold, modern, <br /> and technical
                        </p>
                      </BoxReveal>
                    </div>

                    <div className="absolute text-sm lg:bottom-[-30dvh] bottom-[-30em] flex gap-4 lg:w-[80dvw] w-[60dvw] justify-between">
                      <div className="flex justify-between w-fit gap-4">
                        {Socials.map((val, index) => (
                          <div key={index} className="flex gap-4 z-20">
                            <a
                              className="cursor-pointer hover:underline-offset-8"
                              href={val.link}
                            >
                              {val.name}
                            </a>
                          </div>
                        ))}
                      </div>
                      <div className="end-0 ">
                        <a
                          className="cursor-pointer hover:underline underline-offset-8"
                          href="http://github.com/bieefilled"
                        >
                          Privacy
                        </a>
                      </div>
                    </div>
                    <span className="absolute  h-full w-full inset-0  [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center" />
                  </div>

                  <div className="lg:mx-[5rem] relative text-center lg:z-20 basis-[90dvw]">
                    <img
                      src={img}
                      alt="img"
                      className="h-screen object-cover lg:z-10  w-[100dvw]"
                    />
                  </div>

                  <div className="flex  flex-col z-30 w-full absolute lg:md:relative mt-[10rem] lg:mt-0 lg:mr-[90px]">
                    <div className="flex justify-between flex-col lg:space-y-8">
                      <div className="py-4">
                        <p className="lg:md:text-lg text-sm">Color:</p>
                        <p className="text-lg font-semibold">
                          {" "}
                          {index === 0
                            ? "Blood Orange"
                            : index === 1
                            ? "Blue"
                            : index === 2
                            ? "PurpleHare"
                            : "Marshmello Pink"}
                        </p>
                      </div>

                      <div className="font-semibold z-10 lg:text-2xl flex lg:flex-row flex-col-reverse gap-2 items-baseline tracking-tighter leading-tight">
                        <p className="lg:md:text-lg text-sm">
                          {" "}
                          iD: xxxxx{index + 1}
                        </p>
                        <span className="text-4xl font-bold">$1,249.00</span>
                      </div>
                      <div className="flex w-fit lg:w-full z-10 justify-end mt-6">
                        <div className="">
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
                            } w-full p-4 cursor-pointer `}
                          />
                        </div>

                        <input
                          type="button"
                          value="Add To Cart"
                          className={` hover:bg-[#fff] hover:text-black ${
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
                    </div>
                  </div>
                </div>

                <div className="z-50 mt-[-8dvh] ">
                  <p className="text-[35rem] start font-bold text-slate-900  ">
                    Bieefilled
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* thumbNail design */}
      <Swiper
        modules={[Thumbs, Mousewheel]}
        onSwiper={setThumbSwiper}
        spaceBetween={0}
        slidesPerView={2}
        mousewheel={true}
        watchSlidesProgress={true}
        slideToClickedSlide={true}
        speed={800}
        loop={true}
        className="lg:md:flex absolute top-[75dvh]  inset-0 lg:right-[-25dvw] right-[-30ddvw] w-[16rem] hidden"
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
  );
};
