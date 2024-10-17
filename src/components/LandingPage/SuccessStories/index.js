import React from "react";
import {
  AchievementsCard,
  AchivementsData,
  SuccessStoriesData,
  SuccessStoryCard,
} from "./SuccessStoriesData";
import styles from "./SuccessStories.module.css";
import { inter, league_spartan } from "@/shared/styles/font";
import Link from "next/link";

const ConnectWithJobAdvisorBtn = () => (
  <Link href="/">
    <button
      className={`duration-400 mx-auto mt-[46px] h-[32px] transition-all ease-linear active:scale-95 md:mx-0 ${league_spartan.className} flex w-[169px] items-center justify-center rounded-[7px] bg-Vivid_Tangelo text-[13px] font-medium text-white sm:h-[46.11px] sm:w-[235.76px] sm:text-[18px]`}
    >
      Connect with Job Advisor
    </button>
  </Link>
);

const SuccessStories = () => {
  return (
    <main
      className={`mx-auto mb-[36px] flex w-[320px] flex-col overflow-hidden pt-[51.5px] sm:w-[640px] sm:pt-[61.87px] md:w-[768px] md:pl-[32px] md:pt-[72px] lg:w-[1007px] xl:w-[1069.3px] ${inter.className}`}
    >
      <p
        className={`text-[16px] md:w-[461px] md:text-[24px] md:leading-[22.08px] ${league_spartan.className} mx-auto w-[285px] font-bold leading-[14.72px] sm:w-[515.95px] sm:text-[28px] sm:leading-[25.76px] md:mx-0`}
      >
        Building software careers for thousands, one success story at a time.
      </p>
      <div className="flex flex-col justify-between md:gap-5 md:flex-row lg:gap-20">
        <div>
          <div className="mx-auto mt-[26px] flex h-[69.52px] w-[290px] flex-shrink-0 flex-wrap justify-between sm:mt-[33.76px] sm:h-[125.86px] sm:w-[525px] md:mx-0 md:h-fit md:w-fit md:flex-col md:gap-[37.03px]">
            {AchivementsData.map(({ icon, title, text }) => (
              <AchievementsCard icon={icon} title={title} text={text} />
            ))}
          </div>
          <div className="hidden md:block">
            <ConnectWithJobAdvisorBtn />
          </div>
        </div>

        <div
          className={`relative mt-[46px] flex flex-shrink-0 overflow-hidden lg:w-[670px] xl:w-[711.45px] ${styles.bg_image}`}
        >
          <div
            className={`grid-row-2 grid flex-shrink-0 grid-flow-row grid-cols-3 gap-[12.96px] pl-[12.96px] sm:gap-[15.11px] sm:pl-[15.11px] lg:gap-[17.2px] lg:pl-[17.2px] ${styles.animateX}`}
          >
            {SuccessStoriesData.map((item, idx) => (
              <SuccessStoryCard key={idx} data={item} />
            ))}
          </div>
          <div
            className={`grid-row-2 grid flex-shrink-0 grid-flow-row grid-cols-3 gap-[12.96px] pl-[12.96px] sm:gap-[15.11px] sm:pl-[15.11px] lg:gap-[17.2px] lg:pl-[17.2px] ${styles.animateX}`}
          >
            {SuccessStoriesData.map((item, idx) => (
              <SuccessStoryCard key={idx} data={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <ConnectWithJobAdvisorBtn />
      </div>
    </main>
  );
};

export default SuccessStories;
