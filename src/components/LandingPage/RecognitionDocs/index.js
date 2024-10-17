import { inter, league_spartan, poppins } from "@/shared/styles/font";
import {
  IndianEmblemIcon,
  RecognitionText1,
  StartUpIndiaText,
} from "@/shared/svgIcons/recognition_docs";
import Image from "next/image";
import React from "react";

const RecogitionDocs = () => {
  return (
    <main className="mx-auto flex w-[254px] flex-col gap-[26px] sm:w-[588px] lg:w-[850px] lg:gap-[41px]">
      <div className="flex w-full flex-col gap-[16px] text-center sm:gap-[24px] lg:gap-[31.34px] xl:gap-[39.1px]">
        <p
          className={`mx-auto w-[192px] text-[16px] leading-[14.72px] sm:w-auto sm:text-[24px] sm:leading-[22.08px] xl:text-[28px] ${league_spartan.className} font-bold`}
        >
          Recognized for
          <span className="text-Vivid_Tangelo"> Excellence </span> and
          <span className="text-Vivid_Tangelo"> Innovation </span>
        </p>
        <p className="mx-auto text-[13px] font-semibold leading-[17.7px] text-silverChalice sm:w-[374px] sm:text-[18px] sm:leading-[24.51px] lg:w-[500px] lg:text-[20px] lg:leading-[27.24px] xl:w-[609.34px] xl:text-[23px]">
          Highlighting our commitment to excellence and industry leadership
        </p>
      </div>

      <div className="mx-auto flex w-[204px] flex-col gap-[25.89px] sm:w-[396px] sm:flex-row sm:gap-[23.63px] md:h-[73.86px] md:w-[650.06px] lg:h-[81.34px] lg:w-[720.8px] lg:justify-between xl:h-[95.41px] xl:w-[853.01px]">
        <div className="relative h-[55.76px] w-full flex-shrink-0 sm:h-[50.89px] sm:w-[186.18px] md:h-[73.86px] md:w-[334.68px] lg:h-full lg:w-[334.66px] xl:w-[432.32px]">
          <StartUpIndiaText />
        </div>

        <div className="flex h-[52.21px] w-full justify-between gap-1 md:h-full md:w-[204px] lg:h-full lg:w-[301.71px] xl:w-[353.89px]">
          <IndianEmblemIcon />
        </div>
      </div>
    </main>
  );
};

export default RecogitionDocs;
