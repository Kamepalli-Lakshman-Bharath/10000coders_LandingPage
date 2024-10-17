"use client";
import { open_sans, roboto } from "@/shared/styles/font";
import {
  FooterLogo,
  InstagramIcon,
  LocationIcon,
  MailIcon,
  MetaIcon,
  PhoneIcon,
  YoutubeIcon,
} from "@/shared/svgIcons/footer_svg";
import { FooterData } from "./footerData";
import React from "react";
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";

export const FooterItems = ({ footerItem, id }) => {
  const { items, title } = footerItem;
  return (
    <div
      id="contact"
      className={`flex ${open_sans.className} w-fit flex-col gap-[7px] lg:gap-[8.12px]`}
    >
      <h2 className="text-[14px] font-bold text-white sm:text-[28px] md:text-[16px] lg:text-[21.33px] xl:text-[26.92px]">
        {title}
      </h2>
      <ul
        className={`flex ${id === 0 ? "flex-col gap-[4.2px] sm:gap-[9.64px] md:gap-[7.1px] lg:gap-[8.13px]" : "flex-row flex-wrap gap-[13px] sm:gap-[26px]"} text-start text-[10px] text-[#B1B1B1] md:flex-col md:gap-[4.83px]`}
      >
        {items.map(({ text, icon = "" }, idx) => {
          const isAddressCol = text.length > 40 && idx == 2;
          return (
            <li
              key={idx}
              className={`items-start gap-3 sm:gap-[13.26px] ${isAddressCol ? "items-start" : "items-center"} flex`}
            >
              {icon && (
                <div className="size-[10.66px] flex-shrink-0 sm:size-[28.92px] md:size-[14.49px] lg:size-[19.32px] xl:size-[33.06px]">
                  {icon}
                </div>
              )}
              <p
                className={`text-wrap text-[10px] md:text-[10px] lg:text-[13.33px] xl:text-[16.82px] ${id !== 0 ? "font-bold" : ""} text-[20px] md:font-normal ${isAddressCol ? "w-[159.66px] text-wrap sm:w-[319.3px] md:w-[160px] lg:w-[213.33px] xl:w-[269.17px]" : "text-nowrap"}`}
              >
                {text}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const qickLinks = [
  "About us",
  "Careers",
  "Privacy Policy",
  "Terms and Conditions",
  "Refund Policy",
  "Review",
];

const socialMedia = [
  {
    text: "Instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/10000coders/",
  },
  {
    text: "Youtube",
    icon: <YoutubeIcon />,
    link: "https://www.youtube.com/@10000coders",
  },
  {
    text: "LinkedIn",
    icon: <IoLogoLinkedin size="100%" />,
    link: "https://in.linkedin.com/company/10000-coders",
  },
];

const reachUs = [
  { text: "6305693431", icon: <PhoneIcon /> },
  { text: "admissions@10000coders.co", icon: <MailIcon /> },
];

const Footer = () => {
  return (
    <footer
      className={`${open_sans.className} h-[436.28px] w-full bg-[#071326] text-[11.37px] text-[#627087] sm:h-[879.19px] sm:text-[22.82px] md:flex md:h-[197.08px] md:items-center md:justify-center md:text-[10px] lg:h-[329.49px] lg:text-[13.33px] xl:text-[16.72px]`}
    >
      <div className="mx-auto flex w-[95%] flex-col items-stretch justify-between gap-[38.38px] p-[20.47px] sm:gap-[82.14px] sm:p-[41.07px] md:w-[90%] md:flex-row md:p-0">
        <div className="flex flex-row-reverse md:flex-col md:gap-[24.75px] lg:gap-y-[41.38px]">
          {/* logo */}
          <div className="sm: h-[45.56px] w-[94.57px] flex-shrink-0 sm:absolute md:static sm:h-[91.4px] sm:w-[189.74px] md:h-[56.25px] md:w-[116.77px] md:-translate-x-4 lg:h-[94.04px] lg:w-[195.23px] lg:-translate-x-7">
            <FooterLogo />
          </div>
          {/* reach us */}
          <div className="flex w-full flex-col gap-[12.79px] sm:gap-[25.67px] md:w-fit md:gap-[11.25px] lg:gap-[15px] xl:gap-[18.81px]">
            <p className="text-[13.65px] font-bold sm:text-[27.38px] md:text-[12px] lg:text-[16px] xl:text-[20.06px]">
              Reach Us
            </p>
            <div className="flex flex-col md:gap-[4.7px] lg:gap-[7.52px]">
              {reachUs.map(({ text, icon }) => (
                <div className="flex items-center gap-[11.11px]">
                  <div className="size-[12.15px] sm:size-[22px] md:size-[13px] lg:size-[20px] xl:size-[24.23px]">
                    {icon}
                  </div>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-shrink-0 flex-col justify-between gap-[38.38px] sm:gap-[82.14px] md:h-auto md:w-[68%] md:flex-row md:gap-0">
          {/* quick session */}
          <div className="flex flex-col gap-[12.79px] sm:gap-[25.67px] md:gap-[11.25px] lg:gap-[15px] xl:gap-[18.81px]">
            <p className="font-bold md:text-[12px] lg:text-[16px] xl:text-[20.06px]">
              Quick Links
            </p>
            <div className="flex w-[271.24px] flex-wrap gap-[8.53px] text-nowrap sm:w-[544.17px] sm:gap-[17.11px] md:w-auto md:flex-col md:gap-[7.5px] lg:gap-[10px] xl:gap-[12.54px]">
              {qickLinks.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
          </div>
          {/* Social Media */}
          <div className="flex flex-col gap-[12.79px] sm:gap-[25.67px] md:gap-[11.25px] lg:gap-[15px] xl:gap-[18.81px]">
            <p className="font-bold md:text-[12px] lg:text-[16px] xl:text-[20.06px]">
              Social Media
            </p>
            <div className="flex gap-[22.25px] text-nowrap md:flex-col md:gap-[7.5px] lg:gap-[10px] xl:gap-[12.54px]">
              {socialMedia.map(({ text, icon, link }, idx) => (
                <Link
                  href={link}
                  target="_blank"
                  className="flex items-center gap-[19.29px] md:gap-[10.75px] lg:gap-[11.11px]"
                >
                  <div className="size-[12.15px] sm:size-[22px] md:size-[13px] lg:size-[20px] xl:size-[24.23px]">
                    {icon}
                  </div>
                  <p>{text}</p>
                </Link>
              ))}
            </div>
          </div>
          {/* Address */}
          <div>
            <div className="flex items-start gap-[11.11px]">
              <div className="mt-[5px] size-[13px] sm:size-[22px] md:size-[13px] lg:size-[20px] xl:size-[24.23px]">
                <LocationIcon />
              </div>
              <p className="w-[181.96px] sm:w-[365.06px] md:w-[160px] lg:w-[213.33px]">
                Metro station, MIG 214, Road 1, Behind KPHB, Kukatpally Housing
                Board Colony, Kukatpally, Hyderabad, Telangana 500072
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/*
 <footer
      className={`flex h-[410px] w-full overflow-hidden bg-black text-orange_red h-[819.94px] md:h-[197.08px] lg:h-[262.77px] lg:h-[331.54px] ${open_sans.className}`}
    >
      <div className="grid-row-3 relative mx-auto grid size-full w-[320px] grid-flow-row grid-cols-1 gap-y-[21.61px] overflow-hidden px-[10px] py-[24px] w-[640px] px-[20px] py-[48px] md:flex md:w-[768px] md:justify-between md:py-[24.16px] lg:w-[1024px] lg:w-[1230px]">
        <div className="absolute right-0 top-[19px] h-[60.94px] w-[126.5px] flex-shrink-0 top-[38px] h-[121.87px] w-[252.99px] md:static md:h-[32.29px] md:w-[67.03px] md:flex-shrink-0 lg:h-[43.05px] lg:w-[89.38px] lg:h-[54.32px] lg:w-[112.77px]">
          <FooterLogo />
        </div>
        {FooterData.map((item, idx) => (
          <FooterItems key={idx} id={idx} footerItem={item} />
        ))}
      </div>
    </footer>


*/
