"use client";
import React, { useState } from "react";
import styles from "./HeroSectionStyles.module.css";
import { league_spartan, open_sans } from "@/shared/styles/font";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import Link from "next/link";

const formData = [
  { label: "Name", placeholder: "Enter your name.." },
  { label: "Email", placeholder: "Email to receive session link" },
  { label: "Phone", placeholder: "Enter your mobile.." },
];

const FormForFreeSession = () => {
  const [isRegister, setRegister] = useState(true);
  const [formState, setFormState] = useState({
    Name: "",
    Email: "",
    Phone: "",
  });
  const handleRegister = () => setRegister((prev) => !prev); // for register and close btn
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      transition={{ duration: 0.5 }}
      onSubmit={handleFormSubmit}
      className={`relative mx-auto flex sm:gap-y-[22.46px] md:mx-0 md:w-[234.11px] md:gap-y-[15.65px] xl:w-[287.03px] xl:gap-[20.93px] xl:px-[17.44px] xl:py-[28.78px] ${isRegister ? "h-[358.76px] sm:h-[508.06px] md:h-[352.6px] xl:h-[432.09px]" : "h-fit"} w-[236px] -translate-y-[60px] flex-col gap-y-[15.78px] rounded-[15.78px] sm:-translate-y-[2.5rem] md:-translate-y-0 ${styles.box_shadow} bg-black px-[13.15px] py-[21.69px] transition-all duration-700 ease-linear sm:w-[336px] sm:rounded-[22.46px] sm:px-[18.72px] sm:py-[30.89px] md:px-[21.52px] md:py-[13.04px]`}
    >
      <div
        className={`mx-auto flex size-full h-[49.19px] w-[182.75px] flex-col gap-y-[5.16px] border-b-[1px] border-boulder pb-[5.26px] font-bold sm:w-[260.19px] sm:gap-y-[7.34px] sm:pb-[7.49px] md:h-[47.99px] md:w-[181.29px] md:gap-y-[5.12px] xl:h-[56.75px] xl:w-[242.41px] xl:gap-y-[13.82px] xl:px-[0px] xl:py-[6.98px] ${league_spartan.className}`}
      >
        <p
          className={`w-fit text-[8.38px] leading-[7.72px] text-cantaloupe sm:text-[12px] sm:leading-[11.05px] md:text-[8.36px] xl:text-[12px] xl:leading-[11.05px]`}
        >
          Upcoming FREE Session
        </p>
        <p className="xl:text-[12px text-[15.78px] leading-[14.52px] text-white sm:text-[22px] sm:leading-[20.25px] md:text-[15.33px] xl:leading-[11.05px]">
          HTML Fundamentals
        </p>
      </div>
      {isRegister &&
        formData.map(({ label, placeholder }) => (
          <div
            className={`${open_sans.className} flex flex-col gap-y-[5.46px] overflow-hidden text-[9.7px] leading-[13.21px] transition-all duration-700 ease-linear sm:gap-y-[7.77px] sm:text-[13px] md:gap-y-[5.41px] md:text-[9.06px] md:leading-[12.34px] xl:gap-y-[7.24px] xl:text-[13px] xl:leading-[13px]`}
          >
            <label className="font-semibold text-white" htmlFor={label}>
              {label}
            </label>
            <div className="flex h-[30.31px] w-full items-center gap-1 rounded-[5.16px] bg-white p-[6.06px] sm:h-[43.15px] md:h-[30.06px] xl:h-[40.2px]">
              {label === "Phone" && <div className="text-[#CECECE]">+91</div>}
              <input
                type={"text"}
                name={label}
                required
                className="h-full w-full font-semibold placeholder:text-[#CECECE] focus:outline-none"
                id={label}
                placeholder={placeholder}
              />
            </div>
          </div>
        ))}
      <div>
        <p
          className={`${league_spartan.className} mx-auto w-fit text-[15.78px] font-bold leading-[14.52px] text-white sm:text-[24px] sm:leading-[22.09px] md:text-[16.72px] md:leading-[15.39px] xl:text-[20px]`}
        >
          Starts in : 13h 4m
        </p>
      </div>
      {isRegister && (
        <button
          className={`${league_spartan.className} duration-400 font-semibold transition-all ease-linear active:scale-95 ${styles.schedule_button} mx-auto grid h-fit w-fit place-items-center overflow-hidden rounded-[7px] px-[14px] py-[7px] text-center text-[13px] text-white sm:rounded-[9.97px] sm:px-[19.93px] sm:py-[9.97px] sm:text-[18px] md:px-[13.89px] md:py-[6.09px] md:text-[12.54px] xl:h-[35.57px] xl:w-[148.14px] xl:text-[18px]`}
        >
          Book Your Slot
        </button>
      )}
      <div
        className={`absolute ${open_sans.className} duration-750 right-[7px] top-[7px] w-fit cursor-pointer text-[8.96px] font-bold text-boulder transition-all ease-in sm:text-[13px] md:text-[9.06px]`}
        onClick={handleRegister}
      >
        {isRegister ? (
          <div className="flex h-[25.79px] w-[59.72px] items-center justify-center leading-[12.21px] sm:leading-[17.7px] md:leading-[12.34px]">
            <div className="flex items-end justify-center gap-[5px]">
              <IoClose
                className="size-[11.03px] sm:size-[15.71px] md:size-[10.94px]"
                color="#747474"
              />
              Close
            </div>
          </div>
        ) : (
          <p
            className={`${league_spartan.className} grid h-[25.79px] w-[89.79px] place-items-center leading-[12.21px]`}
          >
            Tap To Register
          </p>
        )}
      </div>
    </form>
  );
};

export default FormForFreeSession;
