"use client";
import React, { useEffect, useState } from "react";
import { faq } from "@/shared/staticData/faqs.json";
import styles from "./Faq.module.css";
import {
  inter,
  league_spartan,
  open_sans,
  poppins,
} from "@/shared/styles/font";
import Link from "next/link";

const FAQSection = () => {
  const [activeQueNo, setActiveQueNo] = useState(0);

  const { answer = "", contact = false } = faq[activeQueNo] || {};
  const [pauseInterval, setPauseInterval] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pauseInterval) {
        setActiveQueNo((prev) => (prev === faq.length - 1 ? 0 : prev + 1));
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [pauseInterval]);

  const handleModuleClick = (moduleNum) => {
    setActiveQueNo(moduleNum);
    setPauseInterval(true);
    setTimeout(() => {
      setPauseInterval(false);
    }, 8000);
  };

  return (
    <main
      className={`${poppins.className} mx-auto w-[320px] overflow-hidden pb-[23.66px] pt-[16px] sm:w-[640px] sm:pb-[47.56px] md:w-[768px] lg:w-[1024px]`}
    >
      <div className="md:mx-auto md:flex md:w-[717.4px] md:justify-between md:rounded-[24.38px] md:border-2 md:border-black md:px-[28.52px] md:py-[32.51px] lg:h-[469.04px] lg:w-[956.54px] lg:px-[44.7px] lg:py-[43.34px]">
        <div className="mx-auto flex h-[354.34px] w-[290px] flex-col justify-between gap-[29.37px] overflow-hidden rounded-[14.82px] border-2 border-black p-[11.12px] sm:h-[719.44px] sm:w-[590px] sm:rounded-[30.16px] sm:p-[22.62px] md:mx-0 md:h-[286.01px] md:w-[269.42px] md:gap-[14.52px] md:rounded-none md:border-none md:p-0 lg:h-[382.35px] lg:w-[359.23px] lg:gap-[19.37px]">
          <p
            className={`text-start sm:text-[37.7px] lg:text-[26.67px] ${league_spartan.className} text-[18.53px] font-bold md:text-[20px]`}
          >
            FAQ
          </p>
          <div
            className={`flex ${inter.className} flelx-col hide-scrollbar h-[300.66px] flex-col gap-[10.71px] overflow-auto sm:h-[609.83px] sm:gap-[21.79px] md:gap-[10.78px] lg:h-[337.98px]`}
          >
            {faq.map(({ question, answer }, idx) => (
              <div onClick={(e) => handleModuleClick(idx, e)}>
                <div
                  key={idx}
                  className={`flex md:hidden ${activeQueNo === idx ? "h-[81.8px] border-Vivid_Tangelo bg-ivory p-[9.27px] sm:h-[164.55px] sm:p-[18.85px]" : "h-[33.06px] justify-center border-[#C6C6C6] px-[11.64px] sm:h-[67.27px] sm:px-[22.62px]"} flex-shrink-0 flex-col overflow-hidden rounded-[7.45px] font-semibold sm:rounded-[15.16px] ${open_sans.className} cursor-pointer border`}
                >
                  <div
                    className={`hide-scrollbar flex flex-col gap-[9.27px] overflow-auto sm:gap-[18.85px]`}
                  >
                    <p
                      className={`cursor-pointer text-[11.18px] sm:text-[24px] ${activeQueNo === idx ? "text-wrap" : "truncate text-nowrap"} text-[#595959] ${open_sans.className}`}
                    >
                      {question}
                    </p>
                    {activeQueNo === idx && (
                      <p
                        className={`${open_sans.className} text-[9.27px] leading-[12.62px] text-Vivid_Tangelo sm:text-[18px] sm:leading-[24.51px]`}
                      >
                        {answer}
                      </p>
                    )}
                  </div>
                </div>
                <div
                  className={`hidden h-[33.27px] cursor-pointer items-center rounded-[7.5px] border px-[11.71px] text-[13px] font-bold md:flex lg:h-[44.36px] lg:px-[15.62px] lg:text-[16px] ${activeQueNo === idx ? "border-Vivid_Tangelo bg-Vivid_Tangelo text-white" : "border-[#C6C6C6]"}`}
                >
                  <p title={question} className="truncate">
                    {question}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden w-[362.66px] flex-col md:flex md:gap-[15.46px] lg:w-[483.55px] lg:gap-[20.62px]">
          <p
            className={`text-[20px] lg:text-[26.67px] ${league_spartan.className} font-bold`}
          >
            Answers
          </p>
          <div
            className={`w-full ${open_sans.className} overflow-hidden rounded-[14.99px] border-2 border-black p-[14.99px] lg:h-[336.74px] ${styles.box_shadow} h-[252.55px] bg-[#FFF5F0]`}
          >
            <div className="hide-scrollbar flex size-full flex-col gap-5 overflow-auto text-[13px] font-semibold lg:text-[16px]">
              {answer}
              {contact && (
                <Link href="/">
                  <button className="w-fit rounded-md bg-Vivid_Tangelo px-4 py-1 text-sm tracking-wide text-white transition-all duration-500 active:scale-95">
                    Contact us
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FAQSection;
