import { inter, league_spartan, open_sans } from "@/shared/styles/font";
import {
  CompanyBuildingSvg,
  DevRabbit,
  KuroGamingSvg,
  MckinleySvg,
  MedExpertsSvg,
  OnPassiveSvg,
  PackageSvg,
  SticSoftSvg,
  StudentImage1,
  StudentImage2,
  StudentImage3,
  StudentImage4,
  StudentImage5,
  StudentImage6,
  UserGraduateSvg,
} from "@/shared/svgIcons/successStoriesSvg";

export const AchievementsCard = ({ icon, title, text }) => {
  return (
    <main
      className={`flex h-[24.92px] w-[132.27px] items-center justify-between sm:h-[45.28px] sm:w-[245.05px] lg:h-[45.37px] lg:w-[246.11px] xl:h-[49.7px] xl:w-[262.02px]`}
    >
      <div className="size-[21.88px] flex-shrink-0 sm:size-[39.6px] lg:size-[40.28px] xl:size-[42.78px]">
        {icon}
      </div>
      <div className="flex w-[98px] flex-col sm:w-[183px] xl:w-[195px]">
        <p
          className={` ${league_spartan.className} text-[12px] font-bold leading-[11.04px] text-coralPink sm:text-[22px] sm:leading-[20.24px] lg:text-[22px] lg:leading-[20.24px] xl:text-[24px] xl:leading-[22.08px]`}
        >
          {title}
        </p>
        <p
          className={`${open_sans.className} text-[8px] font-semibold leading-[10.89px] sm:text-[15px] sm:leading-[20.43px] lg:text-[15px] lg:leading-[20.43px] xl:text-[16px] xl:leading-[21.79px]`}
        >
          {text}
        </p>
      </div>
    </main>
  );
};

export const SuccessStoryCard = ({ data }) => {
  const { profile, company, name, bg_color, profile_bg_color, description } =
    data;
  return (
    <main
      className={`flex h-[185.02px] w-[157.77px] flex-col gap-[10.94px] rounded-[12.96px] px-[12.96px] py-[13.37px] sm:h-[221.45px] sm:w-[183.88px] sm:gap-[12.75px] sm:px-[15.11px] sm:py-[15.58px] md:h-[293.97px] md:w-[244.1px] md:gap-[16.92px] md:p-[20px] lg:h-[252.13px] lg:w-[209.36px] lg:gap-[14.51px] lg:px-[17.2px] lg:py-[17.74px] ${inter.className}`}
      style={{ backgroundColor: bg_color }}
    >
      <div className="flex flex-col gap-[4.77px] sm:gap-[5.56px] md:gap-[7.39px] lg:gap-[6.34px]">
        <div
          style={{ background: profile_bg_color }}
          className="relative flex size-[59.65px] items-center justify-center overflow-hidden rounded-full sm:size-[69.53px] md:size-[92.3px] lg:size-[79.45px]"
        >
          <div className="absolute -bottom-1 h-[49.03px] w-[45.23px] overflow-hidden rounded-full sm:h-[57.14px] sm:w-[52.71px] md:h-[75.86px] md:w-[69.97px] lg:h-[65.06px] lg:w-[60.01px]">
            <div className="absolute -top-1 bottom-0 left-0 right-0">
              {profile}
            </div>
          </div>
        </div>
        <div className="h-[20px] w-[100px] sm:h-[23.31px] sm:w-[116.55px] md:h-[30.94px] md:w-[154.72px] lg:h-[26.54px] lg:w-[132.7px]">
          {company}
        </div>
      </div>

      <p
        className={`text-[8.11px] lg:text-[10.76px] lg:leading-[14.65px] ${open_sans.className} line-clamp-4 leading-[11.04px] text-davys_Grey sm:text-[9.45px] sm:leading-[12.86px] md:line-clamp-none md:text-[12.54px] md:leading-[17.08px]`}
      >
        {description}
      </p>
      <p className="text-[7.29px] font-bold leading-[9.93px] sm:text-[8.5px] sm:leading-[11.57px] md:text-[11.28px] md:leading-[15.36px] lg:leading-[15.36px]">
        {name}
      </p>
    </main>
  );
};

export const AchivementsData = [
  {
    title: "100+ Companies",
    text: "hiring from 10000 coders",
    icon: <CompanyBuildingSvg />,
  },
  {
    title: "1000+ Students",
    text: "Placed Successfully",
    icon: <UserGraduateSvg />,
  },
  {
    title: "4.2 LPA",
    text: "Avg. salary Package",
    icon: <PackageSvg />,
  },
];

export const SuccessStoriesData = [
  {
    name: "Sai Krishna",
    description:
      "“Struggling with other institutes, I found hope with 10000 Coders. Their training shifted my career from mechanical to web development.”",
    company: <MckinleySvg />,
    profile: <StudentImage1 />,
    bg_color: "#F4EBFF",
    profile_bg_color:
      "radial-gradient(42.17% 42.17% at 49.91% 57.83%, rgba(255, 255, 255, 0.19) 0%, #C6A1F7 100%)",
  },
  {
    name: "Vijay kumar",
    description:
      "“10000 Coders doesn't just teach front-end web development; they mold you into a professional ready for the software industry.”",
    company: <MedExpertsSvg />,
    profile: <StudentImage2 />,
    bg_color: "#FFF9EB",
    profile_bg_color:
      "radial-gradient(42.17% 42.17% at 49.91% 57.83%, rgba(255, 255, 255, 0.19) 0%, #FFDA90 100%)",
  },
  {
    name: "srikanth manthri",
    description:
      "“From BSC to IT, I rewrote the narrative with the help of 10000 Coders, proving that determination and learning overcome boundaries.”",
    company: <KuroGamingSvg />,
    profile: <StudentImage3 />,
    bg_color: "#FFEBFF",
    profile_bg_color:
      "radial-gradient(42.17% 42.17% at 49.91% 57.83%, rgba(255, 255, 255, 0.19) 0%, #FF90B8 100%)",
  },
  {
    name: "Balaji Prabhu",
    description:
      "“At 10000 Coders, practical learning surpassed college experiences, making it easier to crack interviews”",
    company: <SticSoftSvg />,
    profile: <StudentImage4 />,
    bg_color: "#EBFFEE",
    profile_bg_color:
      "radial-gradient(42.17% 42.17% at 49.91% 57.83%, rgba(255, 255, 255, 0.19) 0%, #B3FF90 100%)",
  },
  {
    name: "Shirisha",
    description:
      "“Before 10000 Coders, I was stuck in a tough spot with no job prospects and lacking essential skills. But the decision to learn changed everything.”",
    company: <DevRabbit />,
    profile: <StudentImage5 />,
    bg_color: "#FFF0EB",
    profile_bg_color:
      "radial-gradient(42.17% 42.17% at 49.91% 57.83%, rgba(255, 255, 255, 0.19) 0%, #FFB190 100%)",
  },
  {
    name: "Arun kumar",
    bg_color: "#EBF8FF",
    description:
      "“From project delays to project completions, 10000 Coders taught me not only coding but also the discipline and determination.”",
    company: <OnPassiveSvg />,
    profile: <StudentImage6 />,
    profile_bg_color:
      "radial-gradient(42.17% 42.17% at 49.91% 57.83%, rgba(255, 255, 255, 0.19) 0%, #A1DDF7 100%)",
  },
];
