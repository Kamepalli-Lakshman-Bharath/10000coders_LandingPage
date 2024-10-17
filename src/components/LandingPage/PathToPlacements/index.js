"use client";
import {
  AgradeSvg,
  BuildingSvg,
  CarbonDevSvg,
  CourseSvg,
  PlacementsBgImage,
  WebSiteMaintainanceSvg,
} from "@/shared/svgIcons/pathToPlacements";
import styles from "./PathToPlacements.module.css";
import { curriculum } from "@/shared/staticData/homeScreen.json";
import React, { useState } from "react";
import Lottie from "react-lottie";
import { Course_num_text, CourseCard } from "./pathtoplacementsData";
import congratsAnimationData from "./congrats.json";
import {
  inter,
  league_spartan,
  open_sans,
  poppins,
} from "@/shared/styles/font";
import Link from "next/link";

const PathToPlacements = () => {
  const [activeWeek, setActiveWeek] = useState(0);

  const handleActiveWeek = (idx) => setActiveWeek(idx);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: congratsAnimationData,
    renderer: "svg",
  };

  const { keyPoints, overview } = curriculum[activeWeek];

  const handlePreviousWeek = () =>
    setActiveWeek((prev) => (prev !== 0 ? prev - 1 : 6));
  const handleNextWeek = () =>
    setActiveWeek((prev) => (prev !== 6 ? prev + 1 : 0));
  return (
    <main
      className={`mx-auto w-[320px] overflow-hidden pt-[20px] sm:w-[640px] sm:pt-[36.5px] md:w-[768px] md:pt-[57px] lg:w-[1024px] lg:pt-[97.53px]`}
    >
      {/* main section heading */}
      <section
        className={`mx-auto flex w-[294.21px] flex-row items-center justify-center gap-[12px] p-[9.03px] sm:h-[110.95px] sm:w-[540.61px] sm:gap-[22.05px] sm:p-[16.59px] md:w-fit md:flex-col md:gap-[16.15px] lg:h-[223.51px] lg:w-[514.67px] lg:gap-[21.53px] lg:p-0`}
      >
        <div className="h-[42.32px] w-[30.15px] sm:h-[77.77px] sm:w-[55.41px] lg:h-[100.92px] lg:w-[71.91px]">
          <AgradeSvg />
        </div>
        <div
          className={`w-[234px] text-start text-[14px] font-bold leading-[12.88px] sm:w-[429.98px] sm:text-[26px] sm:leading-[23.92px] md:w-fit md:text-center md:text-[24px] md:leading-[22.08px] lg:w-full lg:text-[32px] lg:leading-[29.44px] ${league_spartan.className}`}
        >
          <p className={``}>Follow This Path To Become A Strong</p>
          <p className={`text-coralPink`}>Full Stack Developer</p>
        </div>
      </section>

      <section className="relative mx-auto mt-[19px] w-[17rem] pb-10 sm:w-[33rem] sm:pb-[62.34px] md:mt-[67.87px] md:w-[43rem] lg:mt-[88.01] lg:w-[58rem] lg:pb-20">
        <div className="ml-auto flex w-fit flex-col gap-y-[31px] sm:gap-y-[39.11px]">
          {/* first part */}
          <div className="ml-auto flex w-fit flex-col gap-y-2 sm:gap-[17px]">
            <div className="flex items-center">
              <div
                className={`absolute ${league_spartan.className} left-0 top-0 flex size-[44px] items-center justify-center rounded-full bg-black text-[20px] text-lg font-bold text-white sm:size-[80.86px] sm:text-[36.75px] md:size-[48.95px] md:text-[20.18px] lg:size-[65.26px] lg:text-[26.91px]`}
              >
                1
              </div>
              <div className="inset-y-0-0 absolute w-2 bg-black"></div>
              <p className="text-[12px] font-bold sm:text-[22px] md:text-[22px] lg:text-[28px]">
                Start Here
              </p>
            </div>

            <div
              className={`flex h-[286px] w-[221.65px] flex-col overflow-hidden rounded-[16.87px] px-[13.1px] py-[21.84px] sm:h-[547.06px] sm:w-[407.29px] sm:rounded-[31px] sm:p-[19.38px] md:h-[261.48px] md:w-[600.47px] lg:h-[348.64px] lg:w-[800.63px] lg:flex-row lg:rounded-[46.59px] lg:px-[17.47px] lg:py-[29.11px] ${styles.boxShadow} justify-between border border-black p-2 md:flex-row md:rounded-[34.94px]`}
            >
              <div className="flex flex-col justify-between gap-y-[13px] md:w-[315.52px] md:gap-y-[28.39px] lg:w-[420.7px]">
                <div className="flex flex-col gap-[4.22px] sm:gap-[7.75px]">
                  <p
                    className={`text-[10px] sm:text-[20px] md:text-[21.84px] lg:text-[28px] ${league_spartan.className} ${styles.course_text} font-bold`}
                  >
                    Why Choose This Course?
                  </p>
                  <p
                    className={`${open_sans.className} text-[8px] leading-[10.89px] text-ironSky sm:text-[15px] sm:leading-[20.43px] md:text-[11px] md:leading-[14.98px] lg:text-[15px] lg:leading-[20.43px]`}
                  >
                    Join our Full Stack Development course to elevate your
                    career. Master both front-end and back-end technologies
                    through hands-on projects and expert guidance. Gain
                    practical experience with cutting-edge tools and frameworks.
                    Receive dedicated career support to land your dream job.
                    Start with us and become a standout web developer.
                  </p>
                </div>
                <div className="flex h-[47.43px] w-[152.67px] flex-col gap-[8.44px] sm:h-[87.75px] sm:w-[280.53px] md:w-[232px] lg:w-[309.33px]">
                  <p
                    className={`] text-[12px] sm:text-[22px] md:text-[13px] lg:text-[18px] ${open_sans.className} `}
                  >
                    In
                    <span className="text-coral lg:font-semibold">
                      {" 6-7 Months "}
                    </span>
                    You Will Learn
                  </p>
                  <div className="h-[22.99px] w-full sm:h-[42.25px] md:h-[34.94px] lg:h-[46.58px]">
                    <CourseSvg />
                  </div>
                </div>
              </div>
              {/* image */}
              <div className="mx-auto size-[105px] flex-shrink-0 sm:size-[193.28px] md:size-[217.81px] lg:size-[310px] lg:w-[290.41px]">
                <WebSiteMaintainanceSvg />
              </div>
            </div>
          </div>
          {/* second part */}
          <div
            id="course"
            className="ml-auto flex flex-col gap-y-2 sm:gap-[17px]"
          >
            <div className="flex items-start">
              <div
                className={`absolute ${league_spartan.className} left-0 flex size-[44px] items-center justify-center rounded-full bg-black text-[20px] text-lg font-bold text-white sm:size-[80.86px] sm:text-[36.75px] md:size-[48.95px] md:text-[20.18px] lg:size-[65.26px] lg:text-[26.91px]`}
              >
                2
              </div>
              <p className="text-[12px] font-bold sm:text-[22px] md:text-[22px] lg:text-[28px]">
                Course Details
              </p>
            </div>

            <div
              className={`relative flex h-auto w-[222px] flex-col gap-[15.63px] overflow-hidden rounded-[12px] sm:w-[407.92px] sm:rounded-[31px] sm:px-[26.77px] sm:py-[56.15px] md:w-[600.42px] md:px-[17.47px] md:py-[21.83px] lg:w-[800.57px] lg:gap-[33.48px] lg:rounded-[46.59px] lg:px-[23.29px] lg:py-[29.11px] ${styles.boxShadow} border border-black px-[14.57px] py-[30.56px] md:justify-center`}
            >
              <div
                className={`hide-scrollbar hidden overflow-auto md:flex md:gap-[9.28px] lg:gap-[12.37px] ${"text-classicSliver"} font-bold`}
              >
                {curriculum.map(({ month }, idx) => (
                  <div
                    key={idx}
                    onClick={(e) => handleActiveWeek(idx, e)}
                    className={`grid h-[35.47px] flex-shrink-0 cursor-pointer place-items-center overflow-hidden text-nowrap rounded-[8.73px] px-2 text-[13.1px] font-bold lg:h-[45.29px] lg:w-[129.78px] lg:rounded-[8.73px] lg:text-[16px] ${activeWeek == idx ? `${styles.placements_text} border border-Vivid_Tangelo` : ""}`}
                  >
                    {month}
                  </div>
                ))}
              </div>
              <p className="absolute right-2 top-2 block text-[8.53px] leading-[10.9px] text-shadyGray sm:right-[36.77px] sm:top-[16.54px] sm:text-[15px] sm:leading-[20.44px] md:hidden">
                swipe to see the rest &gt;
              </p>
              <div className="mx-auto flex gap-[10px] text-[17px] font-bold leading-[14.72px] text-coralPink sm:gap-[18.38px] sm:text-[30px] sm:leading-[27.6px] md:hidden">
                <button onClick={handlePreviousWeek}>&lt;</button>
                <div className="flex">
                  Week
                  <span className="block w-4 text-center sm:w-8">
                    {activeWeek + 1}
                  </span>
                </div>
                <button onClick={handleNextWeek}>&gt;</button>
              </div>
              <div
                className={`flex ${inter.className} flex-col-reverse gap-y-[15.6px] text-ironSky sm:gap-y-[28.73px] md:flex-col md:gap-y-[25.11px]`}
              >
                <p className="flex-shrink-0 text-[8px] leading-[10.9px] sm:text-[15px] sm:leading-[20.44px] md:text-[11px] md:leading-[14.98px] lg:text-[15px] lg:leading-[20.43px]">
                  {overview}
                </p>
                <ul className="flex-shrink-0 list-inside list-disc text-[9px] font-bold leading-[12.26px] text-black sm:text-[16px] sm:leading-[21.79px] md:text-[11px] md:font-normal md:leading-[14.98px] md:text-[#818181] lg:text-[15px] lg:leading-[20.43px]">
                  {keyPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* line */}
        <div
          className={`absolute ${styles.line_clr} inset-y-0 left-[18px] right-1/2 -z-20 border-b-[6.8px] border-l-[6.8px] sm:left-[33px] sm:border-b-[12.5px] sm:border-l-[12.5px] md:left-[1.4rem] md:border-b-[7.57px] md:border-l-[7.57px] lg:left-[1.8rem] lg:border-b-[10.09px] lg:border-l-[10.09px]`}
        >
          <div
            className={`absolute ${styles.line_bg_clr} bottom-0 right-0 h-10 w-[6.8px] translate-y-10 sm:h-12 sm:w-[12.5px] sm:translate-y-12 md:h-20 md:w-[7.57px] md:translate-y-20 lg:w-[10.09px]`}
          ></div>
        </div>
      </section>
      {/* <div className="mx-auto mt-8 w-fit -translate-x-[3px] sm:-translate-x-[5px] md:mt-20">
        <Course_num_text num={3} text="Choose" />
      </div> */}
      {/* <div className="my-[18px] flex flex-col items-center justify-center gap-[17px] sm:gap-[31.1px] md:gap-[19.68px] lg:my-[32px] lg:gap-[26.24px]">
        <CourseCard
          icon={<CarbonDevSvg />}
          course="Back End Development"
          description="Delve deeply into server-side programming, database management, and the creation of APIs. Design and implement the core functionalities of web applications, ensuring efficient data processing, security, and scalability."
        />
        <p className="text-[17.36px] font-bold uppercase sm:text-[32px] md:text-2xl lg:text-3xl">
          OR
        </p>
        <div className="flex flex-col items-center justify-center">
          <CourseCard
            icon={<BuildingSvg />}
            course="Internship"
            description="Selecting an internship offers a practical, real-world experience that complements theoretical knowledge. Apply skills learned in the classroom to actual projects, gain insights into industry practices, and work within a professional team."
          />
          <div
            className={`mt-[3px] h-[54px] w-[6px] bg-roseBrown sm:mt-[7px] sm:w-[12.5px] md:h-20 md:w-[7.57px] lg:w-[10.09px] xl:-translate-y-[5px]`}
          ></div>
          <div className="">
            <Course_num_text num={4} text="And Finally..." />
          </div>
        </div>
      </div> */}

      {/* placements box */}
      <div className="relative mx-auto flex h-[189.79px] w-full justify-between text-center sm:h-[348.74px] md:h-[297.21px] md:w-[499.55px] lg:h-[396.28px] lg:w-[666.07px]">
        <div className="h-full w-1/2 lg:w-[296px]">
          <Lottie options={defaultOptions} height="100%" width="100%" />
        </div>
        <p
          className={`absolute ${league_spartan.className} left-1/2 top-10 -translate-x-1/2 text-[25.78px] sm:top-20 sm:text-[48px] md:top-16 md:text-[40.37px] lg:top-[69.98px] lg:text-[54px] ${styles.placements_text} font-semibold`}
        >
          Placement
        </p>
        <div
          className={`absolute z-20 ${open_sans.className} bottom-[11px] left-1/2 flex w-fit -translate-x-1/2 flex-col gap-[12.43px] text-subtleSilver sm:bottom-[43.14px] lg:bottom-[53.33px] lg:gap-[29px]`}
        >
          <p className="text-nowrap text-[12px] font-semibold leading-[14.4px] sm:text-[22px] md:text-[16px] md:leading-[19.2px] lg:text-[21.33px] lg:leading-[25.6px]">
            100’s of students have trusted us
          </p>
          <div className="w-[256.49px] text-wrap text-[10px] leading-[12px] sm:w-[471.3px] sm:text-[18px] sm:leading-[21.6px] md:text-[13px] md:leading-[15.6px] lg:text-[17.33px] lg:leading-[20.8px]">
            <Link
              href="/requestCallBack"
              className="cursor-pointer text-coral hover:underline"
            >
              Reach out now{" "}
            </Link>
            and keep the learning momentum going
          </div>
        </div>
        <div className="h-full w-[1/2] lg:w-[296px]">
          <Lottie options={defaultOptions} height="100%" width="100%" />
        </div>
        <div className="absolute inset-0">
          <PlacementsBgImage />
        </div>
      </div>
    </main>
  );
};

export default PathToPlacements;
