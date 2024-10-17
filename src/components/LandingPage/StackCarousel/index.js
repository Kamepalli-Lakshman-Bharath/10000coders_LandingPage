"use client";
import { open_sans } from "@/shared/styles/font";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { studentData } from "./stackcarousel.json";
import { GoUnmute } from "react-icons/go";
import { VscMute } from "react-icons/vsc";

const StackCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playSound, setPlaySound] = useState(false);
  const [playVid, setPlayVid] = useState(false);
  const swiperRef = useRef(null);
  const playVideoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Check if the section is in view
        setPlayVid(entry.isIntersecting);
      },
      { threshold: 0.3 }, // Trigger when 50% of the section is visible
    );

    if (playVideoRef.current) {
      observer.observe(playVideoRef.current);
    }

    return () => {
      if (playVideoRef.current) {
        observer.unobserve(playVideoRef.current);
      }
    };
  }, []);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // Move to the clicked slide
    }
  };

  const handlePlaySound = () => setPlaySound((prev) => !prev);

  const { stdName, company, role, message, id, img, pp, ppBlack } =
    studentData[activeIndex];
  return (
    <div
      className={`relative ${open_sans.className} mx-auto w-[320px] overflow-hidden pt-[17px] sm:w-[640px] sm:pt-[34] lg:w-[962px] xl:w-[1061.9px]`}
    >
      <p
        className={`mx-auto w-[261px] text-center text-[12.18px] font-semibold leading-[16.61px] text-platinumGray sm:w-[522px] sm:text-[24px] sm:leading-[32.71px] md:w-[522px] md:text-[18px] md:leading-[24.53px]`}
      >
        Our students' experiences speak volumes about the quality of education
        and support we provide.
      </p>
      <div className="mt-[23px] flex flex-col gap-[30px] md:mt-[69px] md:flex-row md:justify-between md:gap-0 lg:mt-[60px] xl:mx-auto xl:mt-[67.42px] xl:w-[1061.9px]">
        <div ref={playVideoRef}>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            initialSlide={activeIndex} // Set initial slide based on state
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Get swiper instance
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update state on slide change
            className="h-[375px] w-[208.83px] flex-shrink-0 sm:h-[400px] sm:w-[250px] md:h-[384.69px] md:w-[214.23px] lg:h-[545.84px] lg:w-[303.97px] xl:h-[602.52px] xl:w-[335.53px]"
          >
            {studentData.map(({ img, id: picId, video }, idx) => (
              <SwiperSlide
                key={idx}
                className={`ease relative rounded-[16px] shadow`}
              >
                {playVid && (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube-nocookie.com/embed/${video}?autoplay=${activeIndex === idx ? 1 : 0}&playsinline=1&mute=${playSound ? 0 : 1}`}
                    title="student_testimonials"
                    frameborder="0"
                    allow="accelerometer; autoplay; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                )}
                <div className="absolute inset-0 z-10"></div>
                <div
                  onClick={handlePlaySound}
                  className="absolute bottom-5 right-5 z-20 rounded-full bg-white p-1 transition-all active:scale-95"
                >
                  {!playSound ? (
                    <VscMute size={24} />
                  ) : (
                    <GoUnmute color="#FF8541" size={24} />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col-reverse justify-between md:h-[377.97px] md:w-[339.93px] md:flex-col lg:h-[533.97px] lg:w-[477.05px] xl:h-[579.55px] xl:w-[526.59px]">
          <div className="mx-auto flex h-[104.3px] w-[285.98px] gap-[13.72px] rounded-[13.72px] bg-[#FFEFE5] p-[10.29px] sm:h-[209.6px] sm:w-[571.97px] sm:gap-[27.44px] sm:p-[20.58px] md:mx-0 md:h-[130.33px] md:w-[336.22px] md:p-[12.1px] lg:h-[182.22px] lg:w-full lg:gap-[22.89px] lg:p-[17.17px] xl:h-[203.16px] xl:gap-[25.26px]">
            <div className="relative h-[76.15px] w-[63.46px] flex-shrink-0 rounded-[10.29px] sm:h-[152.3px] sm:w-[126.91px] md:h-[89.52px] md:w-[74.6px] lg:h-[127.02px] lg:w-[105.85px] lg:rounded-[12.32px] xl:h-[140.21px] xl:w-[116.84px] xl:gap-[25.26px] xl:rounded-[25.26px] xl:p-[18.95px]">
              <Image alt="student Image" fill src={pp} />
            </div>
            <div className="flex flex-col justify-between text-[10px] leading-[14.01px] sm:text-[22px] sm:leading-[29.96px] md:text-[13px] md:leading-[17.7px] lg:gap-[11.44px] lg:text-[18.45px] lg:leading-[25.12px] xl:text-[20.36px] xl:leading-[27.73px]">
              <p className="font-semibold">{message}</p>
              <div className="flex items-end lg:gap-[20px]">
                <p className="">
                  <span className="text-nowrap">{role}</span> <br /> {company}
                </p>
                <p p className="font-bold text-Vivid_Tangelo">
                  {stdName}
                </p>
              </div>
            </div>
          </div>
          <div className="hide-scrollbar grid w-full grid-flow-col flex-wrap gap-[13.97px] overflow-auto p-[10px] pb-[38px] md:order-3 md:flex md:h-[194.65px] md:p-0 md:pb-0 lg:h-[270.75px] lg:w-full lg:justify-center xl:h-[299.39px] xl:gap-x-[21.48px] xl:gap-y-[24.35px]">
            {studentData.map(({ pp, ppBlack, id: picID }, idx) => (
              <div
                onClick={() => handleSlideChange(idx)}
                style={{
                  background:
                    id !== picID
                      ? "radial-gradient(50% 50% at 50% 50%, #853F82 0%, #C983FF 100%)"
                      : "radial-gradient(50% 50% at 50% 50%, #FFF0DA 0%, #FFA06B 100%)",
                }}
                className="relative flex h-[87.43px] w-[72.86px] flex-shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-md sm:h-[174.86px] sm:w-[145.71px] md:w-[74.51px] md:h-[89.41px] sm:rounded-lg md:rounded-xl lg:h-[124.37px] lg:w-[103.64px] lg:rounded-2xl xl:h-[137.52px] xl:w-[114.6px]"
              >
                <Image src={id === picID ? pp : ppBlack} alt="Image" fill />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackCarousel;
