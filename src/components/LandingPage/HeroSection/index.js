"use client";
import { league_spartan, open_sans } from "@/shared/styles/font";
import styles from "./HeroSectionStyles.module.css";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import FreeSessionForm from "./FreeSessionForm";
const RecogitionDocs = dynamic(() => import("../RecognitionDocs"));
const Header = dynamic(() => import("@/widgets/Header"));

const ScheduleBtn = () => (
  <Link href="/">
    <button
      className={`duration-400 grid text-[14.56px] transition-all ease-linear active:scale-95 ${league_spartan.className} font-semibold sm:text-[18px] xl:h-[42.83px] xl:w-[173.18px] xl:text-[17px] ${styles.schedule_button} mx-auto h-[32.41px] w-[134.82px] place-items-center rounded-[9.71px] text-center text-white sm:h-[46px] sm:w-[186px]`}
    >
      Schedule a Call
    </button>
  </Link>
);

const HeroSection = () => {
  return (
    <main
      className={`mx-auto flex min-w-[320px] flex-col gap-4 bg-[url("/hero_sections_images/hero_sectionbg.jpg")] bg-contain sm:gap-[26px] md:gap-[34.5px] xl:gap-0`}
    >
      {/* nav bar */}
      <Header />
      {/* heading part */}
      <div className="xl:h-[100vh]">
        <div className="mt-[85px] flex flex-col gap-[23px] sm:mt-[130px] sm:gap-[20.09px] md:mt-[136px] md:gap-[34px] lg:gap-[20.43px] xl:mt-[135px] xl:gap-[23.72px]">
          <div
            className={`${league_spartan.className} mx-auto flex h-[100px] w-[281px] flex-col gap-[20.09px] sm:h-[86.09px] sm:w-fit md:h-[94.5px] lg:h-fit xl:w-auto xl:gap-[28.15px]`}
          >
            <p
              className={`text-center text-[23.65px] font-semibold leading-[21.76px] text-charcoal sm:text-[32px] sm:leading-[29.44px] md:text-[36px] md:leading-[33.12px] lg:text-[36px] lg:leading-[46px] xl:text-[48px] xl:leading-[44.16px]`}
            >
              Ready to Conquer
            </p>
            <p
              className={`${styles.main_heading} mx-auto text-center text-[31.63px] font-bold uppercase leading-[29.1px] sm:text-[40px] sm:leading-[36.8px] md:text-[44px] md:leading-[40.48px] lg:text-[40px] lg:leading-[36.8px] xl:text-[52px] xl:leading-[47.84px]`}
            >
              Full Stack Development?
            </p>
          </div>
          <p
            className={`mx-auto w-[278px] text-center text-[13.21px] leading-[18px] text-mithril sm:w-[543.63px] sm:text-[20px] sm:leading-[27.24px] md:text-[18px] md:leading-[24.51px] lg:w-[438.81px] lg:text-[15px] lg:leading-[20.43px] xl:w-[515.66px] xl:text-[19px] xl:leading-[21.79px] ${open_sans.className}`}
          >
            We equip you with web development skills, sharpen your interview and
            communication skills, and ensure you emerge as a market-ready
            developer.
          </p>
        </div>
        {/* <div className="mb-[32px] mt-[2rem] xl:mt-[42px]">
          <ScheduleBtn />
        </div> */}
        {/* hero section img */}
        <div className={`md:hidden`}>
          {/* student image */}
          <div
            className={`relative mx-auto h-[231.19px] w-[245px] bg-contain bg-no-repeat sm:h-[398px] sm:w-[421.78px]`}
          >
            <Image
              src="/hero_sections_images/hero_section_img.png"
              quality={100}
              fill={true}
            />
          </div>
          <div className="translate-y-10">
            <FreeSessionForm />
          </div>
        </div>
        {/* lg screen */}
        <div
          className={`relative mx-auto mt-[8px] hidden w-[708px] justify-between md:flex md:items-end lg:w-[60rem] xl:absolute xl:bottom-[10px] xl:left-1/2 xl:w-[91%] xl:-translate-x-1/2`}
        >
          {/* hero section image */}
          <div
            className={`relative h-[351.03px] w-[372px] bg-contain bg-no-repeat lg:h-[346.74px] lg:w-[367.45px] xl:h-[430.37px] xl:w-[456.08px]`}
          >
            <Image
              src="/hero_sections_images/hero_section_img.png"
              quality={100}
              fill={true}
            />
          </div>
          <div className="relative flex-grow-0">
            <FreeSessionForm />
          </div>
        </div>
      </div>

      {/* recognition documents */}
      <div className="md:mt-[30px] lg:mt-[83.81px] xl:mt-[173.67px]">
        <RecogitionDocs />
      </div>
    </main>
  );
};

export default HeroSection;
