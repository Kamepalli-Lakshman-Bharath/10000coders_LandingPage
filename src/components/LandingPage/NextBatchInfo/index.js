import React from "react";
import { FressAccessData } from "./nextBatchData";
import { league_spartan, open_sans, poppins } from "@/shared/styles/font";
import styles from "./NextBatchInfo.module.css";
import Link from "next/link";

const FreeAccessCards = ({ data }) => {
  const { icon, title, bg_color } = data;
  return (
    <main
      className={` ${league_spartan.className} flex h-[45.92px] w-[62.29px] flex-shrink-0 flex-grow-0 flex-col items-center justify-center gap-[5.32px] rounded-[4.91px] sm:h-[102.61px] sm:w-[135.66px] sm:rounded-[7.74px] md:h-[125.38px] md:w-[175.53px] md:gap-[15.05px] md:rounded-[15.05px] lg:h-[108.68px] lg:w-[152.15px] lg:gap-[13.04px] xl:h-[136.09px] xl:w-[190.53px] xl:gap-[17.89px] xl:rounded-[16.33px]`}
      style={{ backgroundColor: bg_color }}
    >
      <div className="size-[20.46px] sm:size-[51.31px] md:text-[62.69px] lg:size-[54.34px] xl:size-[68.05px]">
        {icon}
      </div>
      <p
        className={`text-center text-[6px] sm:text-xs sm:leading-[8.49px] ${league_spartan.className} text-[8.48px] font-semibold leading-[7.8px] sm:leading-[14.72px] md:text-[14px] lg:text-[12.14px] xl:text-[15.2px]`}
      >
        {title}
      </p>
    </main>
  );
};

const NextBatchInfo = () => {
  return (
    <main
      className={`${styles.background} relative flex h-[319px] w-[320px] flex-col gap-[105.5px] rounded-[6.68px] p-3 sm:h-[634px] sm:w-[640px] md:h-[768px] md:w-[714px] lg:h-auto ${open_sans.className} mx-auto sm:rounded-[13.48px] sm:p-[18px] md:rounded-[16.17px] md:p-[35px] lg:my-[5rem] lg:w-[1019px] lg:rounded-[16.17px] lg:p-[21.23px] xl:w-[1278px] xl:rounded-[20.25px] xl:p-[26.58px]`}
    >
      <div className="flex justify-between lg:relative">
        <div className="w-fit text-white">
          <p className="text-[8.66px] font-bold uppercase tracking-[3px] sm:text-[17.48px] sm:tracking-[5px] md:text-[20.98px] md:tracking-[4px] lg:text-[16.17px] xl:text-[20.25px] xl:tracking-[5px]">
            upcoming batches
          </p>
          <div className="mt-[5px] flex flex-col rounded-[6.68px] lg:mt-[16.17px] xl:mt-[20.25px]">
            <p className="text-[21.65px] font-bold leading-[29.48px] sm:text-[43.7px] sm:leading-[59.51px] md:my-[8.66px] md:text-[50.44px] md:leading-[71.42px] lg:text-[40.44px] lg:leading-[55.07px] xl:text-[50.63px] xl:leading-[68.96px]">
              Full Stack Course
            </p>
            <ul className="leading-[14.74px ml-3 list-inside list-disc text-[10.82px] font-semibold sm:text-[21.85px] md:text-[25.22px] md:leading-[35.71px] lg:text-[20.22px] lg:leading-[27.53px] xl:text-[25.32px] xl:leading-[34.48px]">
              <li>Online and Offline</li>
              <li>Beginner Friendly</li>
              <li>Dedicated Support</li>
            </ul>
          </div>
          <p className="mt-[5px] w-fit text-[16.46px] font-bold leading-[22.41px] sm:mt-5 sm:text-[33.22px] md:mt-[9px] md:text-[39.87px] md:leading-[54.29px] lg:mt-auto lg:text-[80.87px] lg:leading-[110.13px] xl:text-[101.27px] xl:leading-[137.91px]">
            19 September
          </p>
        </div>
        <div className="absolute bottom-2 left-2 h-[167.17px] w-[167.17px] bg-[url('/nextbatch_images/girl_image.png')] bg-contain bg-no-repeat sm:bottom-2 sm:left-2 sm:h-[346.39px] sm:w-[337.5px] md:left-auto md:h-[415.67px] md:w-[405px] lg:bottom-0 lg:right-0 lg:h-[361.91px] lg:w-[352.62px] xl:h-[453.18px] xl:w-[441.55px]">
          <button className="ease absolute bottom-0 left-1/2 h-[25.35px] w-[114.33px] -translate-x-1/2 rounded-[4.17px] bg-Vivid_Tangelo text-[9.01px] font-bold text-white transition-all duration-300 active:scale-95 sm:h-[51.96px] sm:w-[230.83px] sm:rounded-[12.66px] sm:text-[19px] md:h-[62.35px] md:w-[276.99px] md:rounded-[18.18px] md:text-[21.82px] lg:h-[62.35px] lg:w-[276.99px] lg:text-[21.82px] xl:h-[77.51px] xl:w-[346.85px] xl:text-[27.32px]">
            <Link
              className="grid h-full w-full place-items-center"
              href="/requestCallBack"
            >
              Grab Your Spot
            </Link>
          </button>
        </div>
      </div>
      <div className="absolute right-4 top-4 mx-auto flex w-fit flex-col gap-[10.76px] sm:right-[25px] sm:top-[15px] sm:gap-[21.01px] md:right-5 md:top-5 md:gap-[25.22px] lg:static lg:right-auto lg:top-auto lg:flex-row lg:gap-[27.64px] xl:gap-[34.62px]">
        {FressAccessData.map((item, idx) => (
          <FreeAccessCards data={item} key={idx} />
        ))}
      </div>
    </main>
  );
};

export default NextBatchInfo;
