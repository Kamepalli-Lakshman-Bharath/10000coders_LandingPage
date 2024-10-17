import styles from "./HiringPartners.module.css";
import Image from "next/image";
import { HiringPartnersData } from "@/shared/staticData/homeScreen.json";
import {
  inter,
  league_spartan,
  open_sans,
  poppins,
} from "@/shared/styles/font";

const HiringPartners = () => {
  return (
    <main
      id="hiringPartners"
      className="flex flex-col gap-[26px] px-[20.49px] py-[42.98px] pt-[51.14px] sm:pt-[58px] md:mx-auto md:w-fit md:flex-row-reverse md:gap-[33px] md:pt-[111.11px] lg:pt-[71px] xl:gap-[77.37px] xl:pt-[72px]"
    >
      <section
        className={`flex ${poppins.className} mx-auto w-[320px] flex-shrink-0 flex-col gap-[14.13px] bg-[#FFFBF8] px-[15px] py-[13px] sm:w-[640px] sm:gap-[28.17px] sm:px-[29px] sm:py-[25.92px] md:mx-0 md:h-[393.83px] md:w-[248.39px] md:rounded-[15.99px] lg:h-[530.02px] lg:w-[334.29px] lg:gap-[29.6px] lg:px-[27.58px] lg:py-[57.85px] xl:h-[555.45px] xl:w-[350.33px] xl:px-[28.9px] xl:py-[60.62px]`}
      >
        <p
          className={`text-[16px] sm:text-[32px] sm:leading-[29.44px] md:text-[24px] md:leading-[22.08px] lg:text-[32px] lg:leading-[29.44px] ${league_spartan.className} font-bold leading-[14.72px]`}
        >
          Our <span className="text-coral">100+ </span> Hiring Partners
        </p>

        <p
          className={`text-[13px] leading-[11.96px] sm:text-[24px] sm:leading-[22.08px] md:text-[13px] md:leading-[11.96px] lg:text-[18px] lg:leading-[16.56px] ${league_spartan.className} font-semibold`}
        >
          Building Future Together
        </p>
        <div
          className={`text-[10px] font-normal leading-[14.72px] sm:text-[18px] sm:leading-[24.53px] md:text-[13px] md:font-semibold md:leading-[17.72px] lg:text-[18px] lg:leading-[24.53px] ${open_sans.className} text-platinumGray`}
        >
          <p className="md:hidden">
            We take pride in our strong connections with top industry leaders
            who provide exceptional career opportunities for our students.
          </p>
          <p className="hidden md:block">
            We take pride in our strong connections with top industry leaders
            who provide exceptional career opportunities for our students. Our
            hiring partners are{" "}
            <span className="text-Vivid_Tangelo">
              dedicated to fostering talent
            </span>{" "}
            and helping our graduates achieve their professional goals.
          </p>
        </div>
      </section>
      <section
        className={`mx-auto flex w-[320px] flex-col justify-between gap-y-[4.32px] sm:w-[640px] md:mx-0 md:w-[438.31px] md:gap-y-[5.9px] lg:h-[552.22px] lg:w-[589.89px] lg:gap-y-[7.94px] xl:h-[578.72px] xl:w-[618.19px]`}
      >
        <div className="mx-auto flex w-full overflow-hidden">
          <div
            className={`${styles.scroll2} flex gap-x-[10px] md:gap-x-[13.99px] lg:gap-x-[18.53px]`}
          >
            {HiringPartnersData.primary.map((img, idx) => (
              <div
                key={idx}
                className="relative size-[60px] flex-shrink-0 bg-white sm:size-[105px] md:size-[80px] lg:size-[110px] xl:size-[125px]"
              >
                <Image quality={100} fill={true} src={img} alt="" />
              </div>
            ))}
          </div>
          <div
            className={`${styles.scroll2} flex gap-x-[10px] md:gap-x-[13.99px] lg:gap-x-[18.53px]`}
          >
            {HiringPartnersData.primary.map((img, idx) => (
              <div
                key={idx}
                className="relative size-[60px] flex-shrink-0 bg-white sm:size-[105px] md:size-[80px] lg:size-[110px] xl:size-[125px]"
              >
                <Image quality={100} fill={true} src={img} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full overflow-hidden">
          <div
            className={`${styles.scroll3} flex gap-x-[10px] md:gap-x-[13.99px] lg:gap-x-[18.53px]`}
          >
            {HiringPartnersData.secondary.map((img, idx) => (
              <div
                key={idx}
                className="relative size-[60px] flex-shrink-0 bg-white sm:size-[105px] md:size-[80px] lg:size-[110px] xl:size-[125px]"
              >
                <Image quality={100} fill={true} src={img} alt="" />
              </div>
            ))}
          </div>
          <div
            className={`${styles.scroll3} flex gap-x-[10px] md:gap-x-[13.99px] lg:gap-x-[18.53px]`}
          >
            {HiringPartnersData.secondary.map((img, idx) => (
              <div
                key={idx}
                className="relative size-[60px] flex-shrink-0 bg-white sm:size-[105px] md:size-[80px] lg:size-[110px] xl:size-[125px]"
              >
                <Image quality={100} fill={true} src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto flex w-full overflow-hidden">
          <div
            className={`${styles.scroll2} flex gap-x-[10px] md:gap-x-[13.99px] lg:gap-x-[18.53px]`}
          >
            {HiringPartnersData.teritory.map((img, idx) => (
              <div
                key={idx}
                className="relative size-[60px] flex-shrink-0 bg-white sm:size-[105px] md:size-[80px] lg:size-[110px] xl:size-[125px]"
              >
                <Image quality={100} fill={true} src={img} alt="" />
              </div>
            ))}
          </div>
          <div
            className={`${styles.scroll2} flex gap-x-[10px] md:gap-x-[13.99px] lg:gap-x-[18.53px]`}
          >
            {HiringPartnersData.teritory.map((img, idx) => (
              <div
                key={idx}
                className="relative size-[60px] flex-shrink-0 bg-white sm:size-[105px] md:size-[80px] lg:size-[110px] xl:size-[125px]"
              >
                <Image quality={100} fill={true} src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto flex w-full overflow-hidden">
          <div
            className={`${styles.scroll3} flex gap-x-[10px] md:gap-x-[13.99px] lg:gap-x-[18.53px]`}
          >
            {HiringPartnersData.quadra.map((img, idx) => (
              <div
                key={idx}
                className="relative size-[60px] flex-shrink-0 bg-white sm:size-[105px] md:size-[80px] lg:size-[110px] xl:size-[125px]"
              >
                <Image quality={100} fill={true} src={img} alt="" />
              </div>
            ))}
          </div>
          <div
            className={`${styles.scroll3} flex gap-x-[10px] md:gap-x-[13.99px] lg:gap-x-[18.53px]`}
          >
            {HiringPartnersData.quadra.map((img, idx) => (
              <div
                key={idx}
                className="relative size-[60px] flex-shrink-0 bg-white sm:size-[105px] md:size-[80px] lg:size-[110px] xl:size-[125px]"
              >
                <Image quality={100} fill={true} src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto flex w-full overflow-hidden">
          <div
            className={`${styles.scroll2} flex gap-x-[10px] md:gap-x-[13.99px] lg:gap-x-[18.53px]`}
          >
            {HiringPartnersData.penta.map((img, idx) => (
              <div
                key={idx}
                className="relative size-[60px] flex-shrink-0 bg-white sm:size-[105px] md:size-[80px] lg:size-[110px] xl:size-[125px]"
              >
                <Image quality={100} fill={true} src={img} alt="" />
              </div>
            ))}
          </div>
          <div
            className={`${styles.scroll2} flex gap-x-[10px] md:gap-x-[13.99px] lg:gap-x-[18.53px]`}
          >
            {HiringPartnersData.penta.map((img, idx) => (
              <div
                key={idx}
                className="relative size-[60px] flex-shrink-0 bg-white sm:size-[105px] md:size-[80px] lg:size-[110px] xl:size-[125px]"
              >
                <Image quality={100} fill={true} src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
export default HiringPartners;
