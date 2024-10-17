"use client";
import React, { useState } from "react";
import styles from "./GuidingExperts.module.css";
import { profilePic, teamData } from "./GuidingExpertsData.js";
import {
  inter,
  league_spartan,
  open_sans,
  poppins,
} from "@/shared/styles/font";
import Image from "next/image";

const GuidingExperts = () => {
  const [activeExpert, setActiveExpert] = useState(0);
  const handleActiveExperts = (idx) => setActiveExpert(idx);

  const { id, name, role, companies, description } = teamData[activeExpert];
  return (
    <main className="flex w-full flex-col pt-[37px] sm:pt-[74px] md:gap-[30px] lg:gap-[27.49px] lg:pt-[60.72px]">
      <p
        className={`text-center text-[16px] font-bold leading-[14.72px] sm:text-[32px] lg:text-[28.8px] lg:leading-[26.5px] ${league_spartan.className}`}
      >
        Faces Behind Our Guiding Expertise
      </p>
      <div
        className={`mx-auto mt-[21px] flex h-[179.23px] w-[290px] flex-col gap-[10.44px] sm:mt-[43.75px] sm:h-auto sm:w-[586px] sm:gap-[21.09px] md:hidden`}
      >
        <div className="mx-auto flex w-fit flex-shrink-0 gap-4 sm:gap-[20.37px]">
          {profilePic.map((pic, idx) => (
            <div
              key={idx}
              onClick={(e) => handleActiveExperts(idx, e)}
              className={`relative size-[47.2px] overflow-hidden rounded-full sm:size-[95.38px] ${activeExpert === idx ? styles["profile" + id] : "bg-[#D9D9D9]"} p-[24px]`}
            >
              <div className="absolute left-1/2 top-1/2 size-[38.84px] -translate-x-1/2 -translate-y-[36%] sm:size-[80.8px]">
                <Image fill src={pic} alt={`team_expert_${idx + 1}`} />
              </div>
            </div>
          ))}
        </div>
        <div
          className={`mx-auto flex h-[121.6px] w-full flex-shrink-0 flex-col justify-between rounded-[10px] p-[9.63px] sm:h-[262.63px] sm:p-[19.47px] ${id === "1" ? "bg-iceBlue" : id === "2" ? "bg-creamyPink" : "bg-mistBlue"}`}
        >
          <p
            className={`leading-[12.54px] sm:text-[22px] sm:leading-[26.63px] ${inter.className} text-[10px] text-[#604F45]`}
          >
            {'" ' + description + '"'}
          </p>
          <div className="flex w-[83px] flex-col gap-[4.09px] text-[7.53px] sm:w-[176px] sm:gap-[8.26px] sm:text-[16px]">
            <p className="font-bold leading-[10.26px] sm:leading-[21.79px]">
              {name}
            </p>
            <p>{role}</p>
            <div
              className={`h-[15.27px] w-[76.37px] sm:h-[28.71px] sm:w-[143.53px]`}
            >
              {companies}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden w-full justify-center gap-[19.97px] md:flex lg:gap-[27.49px]">
        {teamData.map((teamDetials, idx) => {
          const { description, id, name, profile, companies, role } =
            teamDetials;
          return (
            <div
              key={id}
              className={`${inter.className} hidden h-[348px] w-[220px] flex-col items-center gap-[13.73px] overflow-hidden rounded-[13.74px] p-[13.74px] md:flex md:rounded-[22px] lg:h-[479.12px] lg:w-[302.89px] lg:gap-[18.9px] lg:p-[18.92px] ${id === "1" ? "bg-iceBlue" : id === "2" ? "bg-creamyPink" : "bg-mistBlue"}`}
            >
              <div
                className={`relative size-[114.25px] flex-shrink-0 overflow-hidden rounded-full lg:size-[157.3px] xl:size-40 ${styles["profile" + id]} p-[24px]`}
              >
                <div
                  className={`absolute -bottom-4 left-1/2 size-[96.79px] -translate-x-1/2 overflow-hidden lg:size-[129.45px] xl:size-36`}
                >
                  <div className="relative -top-1">{profile}</div>
                </div>
              </div>
              <div className="flex flex-col gap-[4.99px] text-center">
                <p className="text-nowrap text-[16.03px] font-bold leading-[21.83px] lg:text-[22.07px] lg:leading-[30.05px]">
                  {name}
                </p>
                <p className="text-[14.79px] leading-[20.15px] lg:text-[20.37px] lg:leading-[27.74px]">
                  {role}
                </p>
              </div>

              <div className="h-[32.27px] w-[161.37px] lg:h-[44.43px] lg:w-[222.17px]">
                {companies}
              </div>
              <p
                className={`text-center text-[10px] leading-[13.62px] text-[#604F45] lg:text-[13.77px] lg:leading-[18.75px] ${open_sans.className}`}
              >
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default GuidingExperts;
