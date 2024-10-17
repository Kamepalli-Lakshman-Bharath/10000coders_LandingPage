import { league_spartan, open_sans, poppins } from "@/shared/styles/font";
import styles from "./PathToPlacements.module.css";

export const CourseCard = ({ icon, course, description }) => {
  return (
    <main
      className={`mx-auto sm:rounded-[25.52px]  lg:w-[40.071rem] lg:gap-[10.76px] lg:p-[21.53px] ${poppins.className} flex w-[16.818rem] flex-col gap-[6.94px] rounded-[13.89px] p-[13.89px] sm:w-[32.903rem] sm:p-[25.52px] md:w-[30.553rem] md:rounded-[16.15px] ${styles.boxShadow} border border-black md:p-[16.15px]`}
    >
      <div className="mx-auto flex w-fit items-center gap-[18px]">
        <div className="lg:siz-[33.64px] size-[21.7px] sm:size-[39.88px] md:size-[16.15px] lg:size-[40px]">
          {icon}
        </div>
        <p
          className={`text-[18px] sm:text-[32px] lg:text-[28px] ${league_spartan.className} font-bold md:text-[22px]`}
        >
          {course}
        </p>
      </div>
      <p
        className={`text-center ${open_sans.className} text-[8px] leading-[10.89px] text-ironInk sm:text-[15px] sm:leading-[20.43px] md:text-[11px] md:leading-[14.98px] lg:text-[15px] lg:leading-[19px]`}
      >
        {description}
      </p>
    </main>
  );
};

export const Course_num_text = ({ num, text }) => (
  <div
    className={`relative mx-auto flex w-fit flex-col items-center gap-[5px] sm:gap-[9.2px] md:-translate-x-10 md:flex-row md:gap-[30.28px] ${league_spartan.className} `}
  >
    <div
      className={`grid size-[44px] place-items-center rounded-full bg-black text-[20px] font-bold text-white sm:size-[80.86px] sm:text-[36.75px] md:size-[48.95px] md:text-[20.18px] lg:size-[65.26px] lg:text-[26.91px]`}
    >
      {num}
    </div>
    <p className="text-[12px] font-bold sm:text-[22px] md:text-[22px] lg:text-[28px]">
      {text}
    </p>
  </div>
);
