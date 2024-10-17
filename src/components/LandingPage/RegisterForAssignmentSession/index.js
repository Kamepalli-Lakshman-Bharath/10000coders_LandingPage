import Image from "next/image";
import React from "react";
import styles from "./RegisterForAssignmentSession.module.css";
import Link from "next/link";
import { open_sans } from "@/shared/styles/font";

const RegisterForAssignmentSession = () => {
  return (
    <main
      className={`rounded-[12.19px] relative mx-auto mt-20 h-[214px] w-[319px] pl-[18.28px] sm:h-[429px] sm:w-[640px] md:h-[254.48px] md:w-[768px] lg:h-[338.97px] lg:w-[1024px] lg:rounded-[16.24px] lg:pl-[24.36px] lg:pt-[21.31px] xl:h-[424.21px] xl:w-[1280px] xl:rounded-[20.32px] xl:pl-[30.48px] xl:pt-[26.67px] ${styles.background} ${styles.box_shadow} ${open_sans.className} flex flex-col items-center rounded-[5.07px] pt-[16px] text-white md:items-start`}
    >
      <p className="xl;leading-[27.67px] mt-[6.65px] text-[7.23px] font-semibold uppercase leading-[9.85px] tracking-[0.27em] sm:text-[14.5px] sm:leading-[19.74px] sm:tracking-[0.27em] md:text-[12.19px] md:leading-[16.6px] md:tracking-[0.27em] lg:text-[16.24px] lg:leading-[22.11px] lg:tracking-[0.27em] xl:text-[20.32px] xl:tracking-[0.27em]">
        For limited seats only
      </p>
      <p className="mt-[7.23px] text-center text-[18.08px] font-bold leading-[24.62px] sm:mt-[14.45px] sm:text-[36.24px] sm:leading-[49.35px] md:w-[449.52px] md:text-start md:text-[30.48px] md:leading-[41.5px] lg:w-[598.78px] lg:text-[40.6px] lg:leading-[55.28px] xl:w-[749.35px] xl:text-[50.8px] xl:leading-[69.18px]">
        Unlock Your Future with Our Merit-Based Scholarship!
      </p>
      <p className="mt-[3.62px] w-[266.63px] text-center text-[7.23px] font-normal leading-[9.85px] sm:mt-[7.25px] sm:w-[534.51px] sm:text-[14.5px] sm:leading-[19.74px] md:w-[449.52px] md:text-start md:text-[12.19px] md:leading-[16.6px] lg:w-[597px] lg:text-[16.24px] lg:leading-[22.11px] xl:w-[749.35px] xl:text-[20.32px] xl:leading-[27.67px]">
        Showcase Your Talent in Our Comprehensive Assessment and Earn a
        Significant Scholarship for Our Premier IT Training Programs.
      </p>
      <div className="absolute -bottom-3 h-[134.92px] w-[95.05px] sm:-bottom-8 sm:h-[270.48px] sm:w-[190.54px] md:bottom-0 md:right-5 md:h-[324.57px] md:w-[228.65px] lg:h-[432.34px] lg:w-[304.57px] xl:h-[541.06px] xl:w-[387.58px]">
        <Image src="/register_for_assignment_images/person_1.png" fill={true} />
      </div>
      <button className="absolute bottom-11 active:scale-95 transition-all duration-500 ease  z-10 h-[19.14px] w-[97.1px] gap-[3.42px] rounded-[3.17px] bg-white text-[6.84px] font-semibold text-black sm:h-[39.32px] sm:w-[194.29px] sm:rounded-[6.35px] sm:text-[13.7px] md:bottom-[15.23px] md:left-[15.23px] lg:bottom-[21.9px] lg:left-[24.36px] lg:h-[62.48px] lg:w-[309.8px] lg:rounded-[10.15px] lg:text-[21.9px] xl:h-[77.64px] xl:w-[387.58px] xl:text-[27.41px]">
        <Link
          className="grid h-full w-full place-items-center"
          href="/requestCallBack"
        >
          Register for Assessment
        </Link>
      </button>
    </main>
  );
};

export default RegisterForAssignmentSession;
